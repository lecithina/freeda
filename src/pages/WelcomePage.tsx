import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useFreeda} from '../model/FreedaContext.js';

const INCOMPLETE_TYPE = 'needs-assessment';

export default function WelcomePage() {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const model = useFreeda();
    const [hasIncomplete, setHasIncomplete] = useState(false);

    useEffect(() => {
        model.questionnaireModel
            .hasIncompleteResponse(INCOMPLETE_TYPE)
            .then(setHasIncomplete)
            .catch(console.error);
    }, [model]);

    return (
        <div className="flex flex-col items-center gap-8 py-12 text-center">
            <h1 className="text-4xl font-bold uppercase tracking-wide">
                <span className="text-freeda-pink">Hey </span>Freeda
            </h1>
            <p className="max-w-md text-lg text-gray-300">{t('welcome.subtitle')}</p>
            <p className="max-w-md text-gray-400">{t('welcome.description')}</p>

            {hasIncomplete ? (
                <div className="flex flex-col items-center gap-4">
                    <p className="text-sm text-gray-400">{t('welcome.resumePrompt')}</p>
                    <div className="flex gap-4">
                        <button
                            onClick={() => navigate('/questionnaire?resume=true')}
                            className="min-h-[44px] min-w-[140px] rounded-lg bg-freeda-pink px-6 py-3 font-bold uppercase tracking-wide text-white transition-colors hover:bg-freeda-pink-dark focus:outline-none focus:ring-2 focus:ring-freeda-pink focus:ring-offset-2 focus:ring-offset-freeda-black"
                        >
                            {t('welcome.resume')}
                        </button>
                        <button
                            onClick={() => navigate('/questionnaire')}
                            className="min-h-[44px] min-w-[140px] rounded-lg border border-freeda-gray-light px-6 py-3 font-bold uppercase tracking-wide text-gray-300 transition-colors hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-freeda-pink focus:ring-offset-2 focus:ring-offset-freeda-black"
                        >
                            {t('welcome.startNew')}
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => navigate('/questionnaire')}
                    className="min-h-[44px] min-w-[200px] rounded-lg bg-freeda-pink px-8 py-3 text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-freeda-pink-dark focus:outline-none focus:ring-2 focus:ring-freeda-pink focus:ring-offset-2 focus:ring-offset-freeda-black"
                >
                    {t('welcome.start')}
                </button>
            )}
        </div>
    );
}
