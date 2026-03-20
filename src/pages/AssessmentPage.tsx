import {useFreeda} from '../model/FreedaContext.js';
import {useQuestionnaireFlow} from '../hooks/useQuestionnaireFlow.js';
import QuestionnaireFlow from '../components/QuestionnaireFlow.js';
import Summary from '../components/Summary.js';
import PassphraseGate from '../components/PassphraseGate.js';
import {useEffect, useState} from 'react';
import type {Questionnaire} from '@refinio/one.models/lib/models/QuestionnaireModel.js';
import {sendAssessmentResults} from '../utils/sendAssessmentResults.js';

const INCOMPLETE_TYPE = 'internal-assessment';

export default function AssessmentPage() {
    const model = useFreeda();
    const [questionnaire, setQuestionnaire] = useState<Questionnaire | null>(null);

    useEffect(() => {
        model.questionnaireModel
            .questionnaireByName('InternalAssessment', 'de')
            .then(setQuestionnaire)
            .catch(console.error);
    }, [model]);

    if (!questionnaire) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-freeda-gray-light border-t-freeda-pink" />
            </div>
        );
    }

    return (
        <PassphraseGate>
            <AssessmentPageInner questionnaire={questionnaire} model={model} />
        </PassphraseGate>
    );
}

function AssessmentPageInner({
    questionnaire,
    model
}: {
    questionnaire: Questionnaire;
    model: ReturnType<typeof useFreeda>;
}) {
    const flow = useQuestionnaireFlow(
        questionnaire,
        model.questionnaireModel,
        INCOMPLETE_TYPE
    );

    const {state, setAnswer, goNext, goBack, goToStep, submit: baseSubmit, reset, start, resume, groups} = flow;

    const submit = async () => {
        await baseSubmit();
        // Send assessment results in the background (fire and forget)
        sendAssessmentResults(groups, state.answers);
    };

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [state.phase]);

    if (state.phase === 'welcome') {
        return (
            <div className="flex flex-col items-center gap-8 py-12 text-center">
                <h1 className="text-4xl font-bold uppercase tracking-wide">
                    <span className="text-freeda-pink">Stufe </span>2
                </h1>
                <p className="max-w-md text-lg text-gray-300">Interne Bewertung</p>
                <p className="max-w-md text-gray-400">
                    Wirtschafts- und Vulnerabilitätserhebung basierend auf dem Sahakarya-Nepal-Formular.
                </p>

                {state.hasIncomplete ? (
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-sm text-gray-400">
                            Es gibt eine unvollständige Bewertung. Möchten Sie fortfahren?
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={resume}
                                className="min-h-[44px] min-w-[140px] rounded-lg bg-freeda-pink px-6 py-3 font-bold uppercase tracking-wide text-white transition-colors hover:bg-freeda-pink-dark focus:outline-none focus:ring-2 focus:ring-freeda-pink focus:ring-offset-2 focus:ring-offset-freeda-black"
                            >
                                Fortfahren
                            </button>
                            <button
                                onClick={start}
                                className="min-h-[44px] min-w-[140px] rounded-lg border border-freeda-gray-light px-6 py-3 font-bold uppercase tracking-wide text-gray-300 transition-colors hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-freeda-pink focus:ring-offset-2 focus:ring-offset-freeda-black"
                            >
                                Neu starten
                            </button>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={start}
                        className="min-h-[44px] min-w-[200px] rounded-lg bg-freeda-pink px-8 py-3 text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-freeda-pink-dark focus:outline-none focus:ring-2 focus:ring-freeda-pink focus:ring-offset-2 focus:ring-offset-freeda-black"
                    >
                        Bewertung starten
                    </button>
                )}
            </div>
        );
    }

    if (state.phase === 'thankyou') {
        return (
            <div className="flex flex-col items-center gap-8 py-12 text-center">
                <h2 className="text-3xl font-bold uppercase tracking-wide">
                    Bewertung abgeschlossen
                </h2>
                <p className="max-w-md text-gray-300">
                    Die interne Bewertung wurde erfolgreich eingereicht.
                </p>
                <button
                    type="button"
                    onClick={reset}
                    className="min-h-[44px] rounded-lg border border-freeda-pink px-8 py-3 font-bold text-freeda-pink transition-colors hover:bg-freeda-pink hover:text-white focus:outline-none focus:ring-2 focus:ring-freeda-pink focus:ring-offset-2 focus:ring-offset-freeda-black"
                >
                    Neue Bewertung
                </button>
            </div>
        );
    }

    if (state.phase === 'summary') {
        return (
            <div className="space-y-6">
                <Summary
                    groups={groups}
                    answers={state.answers}
                    onEdit={goToStep}
                    onSubmit={submit}
                    onBack={goBack}
                />
                <div className="flex justify-center pt-2">
                    <button
                        type="button"
                        onClick={() => window.print()}
                        className="min-h-[44px] rounded-lg border border-freeda-gray-light px-6 py-3 font-medium text-gray-300 transition-colors hover:border-gray-500"
                    >
                        Bericht drucken
                    </button>
                </div>
            </div>
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
