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
                <a
                    href="https://www.heyfreeda.com/impressum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 transition-colors hover:text-freeda-pink"
                >
                    {t('footer.impressum')}
                </a>
            </div>
        </footer>
    );
}
