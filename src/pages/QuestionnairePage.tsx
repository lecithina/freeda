import {useTranslation} from 'react-i18next';
import {useFreeda} from '../model/FreedaContext.js';
import {useQuestionnaireFlow} from '../hooks/useQuestionnaireFlow.js';
import QuestionnaireFlow from '../components/QuestionnaireFlow.js';
import Summary from '../components/Summary.js';
import ThankYou from '../components/ThankYou.js';
import {useEffect, useState} from 'react';
import type {Questionnaire} from '@refinio/one.models/lib/models/QuestionnaireModel.js';

const INCOMPLETE_TYPE = 'needs-assessment';

export default function QuestionnairePage() {
    const {i18n} = useTranslation();
    const model = useFreeda();
    const [questionnaire, setQuestionnaire] = useState<Questionnaire | null>(null);

    useEffect(() => {
        model.questionnaireModel
            .questionnaireByName('NeedsAssessment', i18n.language)
            .then(setQuestionnaire)
            .catch(() => {
                model.questionnaireModel
                    .questionnaireByName('NeedsAssessment', 'en')
                    .then(setQuestionnaire)
                    .catch(console.error);
            });
    }, [model, i18n.language]);

    if (!questionnaire) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-freeda-gray-light border-t-freeda-pink" />
            </div>
        );
    }

    return (
        <QuestionnairePageInner
            questionnaire={questionnaire}
            model={model}
        />
    );
}

function QuestionnairePageInner({
    questionnaire,
    model
}: {
    questionnaire: Questionnaire;
    model: ReturnType<typeof useFreeda>;
}) {
    const {t} = useTranslation();
    const flow = useQuestionnaireFlow(
        questionnaire,
        model.questionnaireModel,
        INCOMPLETE_TYPE
    );

    const {state, setAnswer, goNext, goBack, goToStep, submit, reset, start, resume, groups} = flow;

    if (state.phase === 'welcome') {
        return (
            <div className="flex flex-col items-center gap-8 py-12 text-center">
                <h1 className="text-4xl font-bold uppercase tracking-wide">
                    <span className="text-freeda-pink">Hey </span>Freeda
                </h1>
                <p className="max-w-md text-lg text-gray-300">{t('welcome.subtitle')}</p>
                <p className="max-w-md text-gray-400">{t('welcome.description')}</p>

                {state.hasIncomplete ? (
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-sm text-gray-400">{t('welcome.resumePrompt')}</p>
                        <div className="flex gap-4">
                            <button
                                onClick={resume}
                                className="min-h-[44px] min-w-[140px] rounded-lg bg-freeda-pink px-6 py-3 font-bold uppercase tracking-wide text-white transition-colors hover:bg-freeda-pink-dark focus:outline-none focus:ring-2 focus:ring-freeda-pink focus:ring-offset-2 focus:ring-offset-freeda-black"
                            >
                                {t('welcome.resume')}
                            </button>
                            <button
                                onClick={start}
                                className="min-h-[44px] min-w-[140px] rounded-lg border border-freeda-gray-light px-6 py-3 font-bold uppercase tracking-wide text-gray-300 transition-colors hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-freeda-pink focus:ring-offset-2 focus:ring-offset-freeda-black"
                            >
                                {t('welcome.startNew')}
                            </button>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={start}
                        className="min-h-[44px] min-w-[200px] rounded-lg bg-freeda-pink px-8 py-3 text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-freeda-pink-dark focus:outline-none focus:ring-2 focus:ring-freeda-pink focus:ring-offset-2 focus:ring-offset-freeda-black"
                    >
                        {t('welcome.start')}
                    </button>
                )}
            </div>
        );
    }

    if (state.phase === 'thankyou') {
        return <ThankYou onNewQuestionnaire={reset} />;
    }

    if (state.phase === 'summary') {
        return (
            <Summary
                groups={groups}
                answers={state.answers}
                onEdit={goToStep}
                onSubmit={submit}
                onBack={goBack}
            />
        );
    }

    return (
        <QuestionnaireFlow
            state={state}
            setAnswer={setAnswer}
            goNext={goNext}
            goBack={goBack}
        />
    );
}
