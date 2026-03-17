import {useCallback, useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import type {FlowState} from '../hooks/useQuestionnaireFlow.js';
import type {QuestionnaireValue} from '@refinio/one.models/lib/models/QuestionnaireModel.js';
import QuestionRenderer from './questions/QuestionRenderer.js';

interface Props {
    state: FlowState;
    setAnswer: (linkId: string, value: QuestionnaireValue[]) => void;
    goNext: () => void;
    goBack: () => void;
}

export default function QuestionnaireFlow({state, setAnswer, goNext, goBack}: Props) {
    const {t} = useTranslation();
    const {currentStep, totalSteps, currentGroup, visibleQuestions, validationErrors} = state;
    const progressPercent = ((currentStep + 1) / totalSteps) * 100;
    const topRef = useRef<HTMLDivElement>(null);
    const prevStep = useRef(currentStep);

    useEffect(() => {
        if (currentStep !== prevStep.current) {
            prevStep.current = currentStep;
            topRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }, [currentStep]);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return;

            // Don't intercept Tab inside text inputs/textareas — let normal focus work there
            const tag = (e.target as HTMLElement)?.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA') return;

            e.preventDefault();
            if (e.shiftKey) {
                goBack();
            } else {
                goNext();
            }
        },
        [goNext, goBack]
    );

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    if (!currentGroup) return null;

    return (
        <div className="space-y-6">
            <div ref={topRef} />
            {/* Progress bar — sticky */}
            <div className="sticky top-0 z-10 -mx-4 bg-freeda-black px-4 pb-3 pt-2">
                <div className="flex justify-between text-sm text-gray-400">
                    <span>{t('questionnaire.section', {current: currentStep + 1, total: totalSteps})}</span>
                    <span>{Math.round(progressPercent)}%</span>
                </div>
                <div className="mt-1 h-2 overflow-hidden rounded-full bg-freeda-gray-light">
                    <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{width: `${progressPercent}%`, backgroundColor: '#4ade80'}}
                    />
                </div>
            </div>

            {/* Group heading */}
            <h2 className="text-xl font-bold uppercase tracking-wide">{currentGroup.text}</h2>

            {/* Questions */}
            <div className="space-y-6">
                {visibleQuestions.map(question => (
                    <div key={question.linkId} className="space-y-2">
                        {question.text && question.type !== 'display' && (
                            <label className="block text-sm font-medium text-gray-300">
                                {question.text}
                                {question.required && (
                                    <span className="ml-1 text-freeda-pink">*</span>
                                )}
                            </label>
                        )}
                        <QuestionRenderer
                            question={question}
                            value={state.answers.get(question.linkId) ?? []}
                            onChange={value => setAnswer(question.linkId, value)}
                        />
                        {validationErrors.has(question.linkId) && (
                            <p className="text-sm text-freeda-pink">
                                {validationErrors.get(question.linkId) === 'other-text-required'
                                    ? t('questionnaire.otherTextRequired')
                                    : t('questionnaire.required')}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between pt-4">
                <button
                    type="button"
                    onClick={goBack}
                    disabled={!state.canGoBack}
                    className="min-h-[44px] rounded-lg border border-freeda-gray-light px-6 py-3 font-medium text-gray-300 transition-colors hover:border-gray-500 disabled:cursor-not-allowed disabled:opacity-30"
                >
                    {t('questionnaire.back')}
                </button>
                <button
                    type="button"
                    onClick={goNext}
                    className="min-h-[44px] rounded-lg bg-freeda-pink px-6 py-3 font-bold text-white transition-colors hover:bg-freeda-pink-dark focus:outline-none focus:ring-2 focus:ring-freeda-pink focus:ring-offset-2 focus:ring-offset-freeda-black"
                >
                    {currentStep === totalSteps - 1
                        ? t('questionnaire.review')
                        : t('questionnaire.next')}
                </button>
            </div>
        </div>
    );
}
