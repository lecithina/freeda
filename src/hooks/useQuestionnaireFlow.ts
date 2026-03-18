import {useState, useCallback, useEffect} from 'react';
import type {
    Question,
    Questionnaire,
    QuestionnaireValue,
    QuestionnaireResponse,
    QuestionnaireResponseItem
} from '@refinio/one.models/lib/models/QuestionnaireModel.js';
import type QuestionnaireModel from '@refinio/one.models/lib/models/QuestionnaireModel.js';
import {sendResultsEmail} from '../utils/sendResults.js';
import {trackEvent} from '../utils/tracking.js';

export type FlowPhase = 'welcome' | 'questions' | 'summary' | 'thankyou';

export interface FlowState {
    phase: FlowPhase;
    currentStep: number;
    totalSteps: number;
    answers: Map<string, QuestionnaireValue[]>;
    currentGroup: Question | null;
    visibleQuestions: Question[];
    canGoBack: boolean;
    canGoNext: boolean;
    validationErrors: Map<string, string>;
    hasIncomplete: boolean;
}

/**
 * Evaluate enableWhen conditions for a question.
 */
function isQuestionEnabled(question: Question, answers: Map<string, QuestionnaireValue[]>): boolean {
    if (!question.enableWhen || question.enableWhen.length === 0) return true;

    const results = question.enableWhen.map(condition => {
        const answer = answers.get(condition.question);
        if (!answer || answer.length === 0) {
            if (condition.operator === 'exists') {
                return condition.answerBoolean === false;
            }
            return false;
        }

        if (condition.operator === 'exists') {
            return condition.answerBoolean === true;
        }

        if (condition.operator === '=' && condition.answerCoding) {
            return answer.some(a => a.valueCoding?.code === condition.answerCoding?.code);
        }

        if (condition.operator === '>' && condition.answerCoding) {
            return answer.some(a => {
                const code = parseInt(a.valueCoding?.code ?? '0');
                const threshold = parseInt(condition.answerCoding?.code ?? '0');
                return code > threshold;
            });
        }

        return true;
    });

    if (question.enableBehavior === 'all') {
        return results.every(Boolean);
    }
    // Default is 'any'
    return results.some(Boolean);
}

/**
 * Get visible sub-questions within a group, respecting enableWhen.
 */
function getVisibleQuestions(group: Question, answers: Map<string, QuestionnaireValue[]>): Question[] {
    if (!group.item) return [];
    return group.item.filter(q => isQuestionEnabled(q, answers));
}

/**
 * Validate required fields in current step.
 */
function validateStep(
    questions: Question[],
    answers: Map<string, QuestionnaireValue[]>
): Map<string, string> {
    const errors = new Map<string, string>();
    for (const q of questions) {
        if (q.type === 'display') continue;

        const answer = answers.get(q.linkId);

        // Required field check
        if (q.required) {
            if (!answer || answer.length === 0) {
                errors.set(q.linkId, 'required');
                continue;
            }
        }

        // If Sonstiges is selected, the text field must not be empty
        if (answer && answer.length > 0) {
            const hasOther = answer.some(
                a => a.valueCoding?.code === 'other' || a.valueCoding?.code === 'other-open'
            );
            if (hasOther) {
                const otherText = answer.find(a => a.valueString)?.valueString?.trim();
                if (!otherText) {
                    errors.set(q.linkId, 'other-text-required');
                }
            }
        }
    }
    return errors;
}

/**
 * Build a QuestionnaireResponse from answers map.
 */
function buildResponse(
    questionnaire: Questionnaire,
    answers: Map<string, QuestionnaireValue[]>,
    status: 'in-progress' | 'completed'
): QuestionnaireResponse {
    const items: QuestionnaireResponseItem[] = [];

    for (const group of questionnaire.item ?? []) {
        if (group.type === 'group' && group.item) {
            const subItems: QuestionnaireResponseItem[] = [];
            for (const q of group.item) {
                const answer = answers.get(q.linkId);
                subItems.push({
                    linkId: q.linkId,
                    answer: answer ?? []
                });
            }
            items.push({
                linkId: group.linkId,
                answer: [],
                item: subItems
            });
        } else {
            const answer = answers.get(group.linkId);
            items.push({
                linkId: group.linkId,
                answer: answer ?? []
            });
        }
    }

    return {
        resourceType: 'QuestionnaireResponse_2_0_0' as const,
        questionnaire: questionnaire.url,
        status,
        item: items
    } as QuestionnaireResponse;
}

/**
 * Load answers from a stored incomplete response.
 */
function loadAnswersFromResponse(
    response: QuestionnaireResponse
): Map<string, QuestionnaireValue[]> {
    const answers = new Map<string, QuestionnaireValue[]>();

    for (const item of response.item) {
        if (item.answer.length > 0) {
            answers.set(item.linkId, item.answer);
        }
        if (item.item) {
            for (const subItem of item.item) {
                if (subItem.answer.length > 0) {
                    answers.set(subItem.linkId, subItem.answer);
                }
            }
        }
    }

    return answers;
}

export function useQuestionnaireFlow(
    questionnaire: Questionnaire,
    questionnaireModel: QuestionnaireModel,
    incompleteType: string
) {
    const [phase, setPhase] = useState<FlowPhase>('welcome');
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Map<string, QuestionnaireValue[]>>(new Map());
    const [validationErrors, setValidationErrors] = useState<Map<string, string>>(new Map());
    const [hasIncomplete, setHasIncomplete] = useState(false);

    const groups = questionnaire.item?.filter(i => i.type === 'group' || i.type !== 'display') ?? [];
    const totalSteps = groups.length;
    const currentGroup = groups[currentStep] ?? null;
    const visibleQuestions = currentGroup ? getVisibleQuestions(currentGroup, answers) : [];

    // Check for incomplete response on mount
    useEffect(() => {
        questionnaireModel
            .incompleteResponse(incompleteType)
            .then(data => {
                if (data?.data.response[0]) {
                    setHasIncomplete(true);
                }
            })
            .catch(console.error);
    }, [questionnaireModel, incompleteType]);

    const setAnswer = useCallback(
        (linkId: string, value: QuestionnaireValue[]) => {
            setAnswers(prev => {
                const next = new Map(prev);
                if (value.length === 0) {
                    next.delete(linkId);
                } else {
                    next.set(linkId, value);
                }
                return next;
            });
            // Clear validation error when user answers
            setValidationErrors(prev => {
                if (!prev.has(linkId)) return prev;
                const next = new Map(prev);
                next.delete(linkId);
                return next;
            });
        },
        []
    );

    const autoSave = useCallback(async () => {
        const response = buildResponse(questionnaire, answers, 'in-progress');
        await questionnaireModel.postIncompleteResponse(response, incompleteType);
    }, [questionnaire, answers, questionnaireModel, incompleteType]);

    const goNext = useCallback(async () => {
        // Validate current step
        const errors = validateStep(visibleQuestions, answers);
        if (errors.size > 0) {
            setValidationErrors(errors);
            return;
        }

        if (currentStep < totalSteps - 1) {
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep);
            setValidationErrors(new Map());
            trackEvent('section_completed', {
                section: currentStep + 1,
                totalSections: totalSteps,
                sectionName: currentGroup?.text ?? '',
                language: questionnaire.language ?? 'en'
            });
            await autoSave();
        } else {
            // Last step — go to summary
            setPhase('summary');
            trackEvent('review_reached', {language: questionnaire.language ?? 'en'});
            await autoSave();
        }
    }, [currentStep, totalSteps, visibleQuestions, answers, autoSave, currentGroup, questionnaire]);

    const goBack = useCallback(() => {
        if (phase === 'summary') {
            setPhase('questions');
            setCurrentStep(totalSteps - 1);
        } else if (currentStep > 0) {
            setCurrentStep(s => s - 1);
            setValidationErrors(new Map());
        }
    }, [currentStep, phase, totalSteps]);

    const goToStep = useCallback((step: number) => {
        setPhase('questions');
        setCurrentStep(step);
        setValidationErrors(new Map());
    }, []);

    const submit = useCallback(async () => {
        const response = buildResponse(questionnaire, answers, 'completed');
        await questionnaireModel.postResponse(response, 'NeedsAssessment', incompleteType);
        await questionnaireModel.markIncompleteResponseAsComplete(incompleteType);

        // Send results in the background (fire and forget)
        sendResultsEmail(groups, answers, questionnaire.language ?? 'en');
        trackEvent('questionnaire_submitted', {language: questionnaire.language ?? 'en'});

        setPhase('thankyou');
    }, [questionnaire, answers, questionnaireModel, incompleteType, groups]);

    const start = useCallback(() => {
        setAnswers(new Map());
        setCurrentStep(0);
        setValidationErrors(new Map());
        setPhase('questions');
        trackEvent('questionnaire_started', {language: questionnaire.language ?? 'en'});
    }, [questionnaire]);

    const resume = useCallback(async () => {
        const data = await questionnaireModel.incompleteResponse(incompleteType);
        if (data?.data.response[0]) {
            setAnswers(loadAnswersFromResponse(data.data.response[0]));
        }
        setPhase('questions');
    }, [questionnaireModel, incompleteType]);

    const reset = useCallback(() => {
        setPhase('welcome');
        setCurrentStep(0);
        setAnswers(new Map());
        setValidationErrors(new Map());
    }, []);

    const state: FlowState = {
        phase,
        currentStep,
        totalSteps,
        answers,
        currentGroup,
        visibleQuestions,
        canGoBack: phase === 'summary' || currentStep > 0,
        canGoNext: true,
        validationErrors,
        hasIncomplete
    };

    return {
        state,
        setAnswer,
        goNext,
        goBack,
        goToStep,
        submit,
        reset,
        start,
        resume,
        groups
    };
}
