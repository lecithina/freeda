import {useTranslation} from 'react-i18next';

interface Props {
    onNewQuestionnaire: () => void;
}

export default function ThankYou({onNewQuestionnaire}: Props) {
    const {t} = useTranslation();

    return (
        <div className="flex flex-col items-center gap-8 py-12 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-freeda-pink/20">
                <svg
                    className="h-10 w-10 text-freeda-pink"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                    />
                </svg>
            </div>

            <h2 className="text-3xl font-bold uppercase tracking-wide">
                {t('thankYou.title')}
            </h2>

            <p className="max-w-md text-gray-300">{t('thankYou.message')}</p>

            <button
                type="button"
                onClick={onNewQuestionnaire}
                className="min-h-[44px] rounded-lg border border-freeda-pink px-8 py-3 font-bold text-freeda-pink transition-colors hover:bg-freeda-pink hover:text-white focus:outline-none focus:ring-2 focus:ring-freeda-pink focus:ring-offset-2 focus:ring-offset-freeda-black"
            >
                {t('thankYou.newQuestionnaire')}
            </button>
        </div>
    );
}
