import LanguageSelector from './LanguageSelector.js';

export default function Header() {
    return (
        <header className="border-b border-freeda-gray-light px-4 py-4">
            <div className="mx-auto flex max-w-2xl items-center justify-between">
                <a href="https://www.heyfreeda.com/" className="flex items-center gap-3">
                    <img src="/logo.svg" alt="Hey Freeda" className="h-10" />
                </a>
                <LanguageSelector />
            </div>
        </header>
    );
}
