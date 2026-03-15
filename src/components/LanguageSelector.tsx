import {useTranslation} from 'react-i18next';

const languages = [
    {code: 'ne', label: 'नेपाली'},
    {code: 'de', label: 'Deutsch'},
    {code: 'en', label: 'English'}
] as const;

export default function LanguageSelector() {
    const {i18n} = useTranslation();

    return (
        <div className="flex gap-1">
            {languages.map(({code, label}) => (
                <button
                    key={code}
                    onClick={() => i18n.changeLanguage(code)}
                    className={`min-h-[44px] rounded px-3 py-2 text-sm font-medium transition-colors ${
                        i18n.language === code
                            ? 'bg-freeda-pink text-white'
                            : 'text-gray-400 hover:text-white'
                    }`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}
