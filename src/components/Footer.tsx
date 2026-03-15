import {useTranslation} from 'react-i18next';

export default function Footer() {
    const {t} = useTranslation();

    return (
        <footer className="border-t border-freeda-gray-light px-4 py-6 text-sm text-gray-400">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-3">
                <a
                    href="https://www.heyfreeda.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-freeda-pink"
                >
                    {t('footer.website')}
                </a>
                <p className="text-center text-xs text-gray-500">
                    Hey Freeda e.V. &middot; IBAN: DE40 4306 0967 1290 3474 00
                </p>
            </div>
        </footer>
    );
}
