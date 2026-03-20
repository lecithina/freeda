import {useState, useCallback, useEffect, type ReactNode, type FormEvent} from 'react';

const SESSION_KEY = 'freeda-assessment-auth';

async function sha256(input: string): Promise<string> {
    const data = new TextEncoder().encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Passphrase: "heyfreeda2026"
 * We compute the expected hash once at runtime so there is no risk of a
 * typo in a hardcoded hex string.  For a client-side internal tool the
 * security model is identical either way.
 */
let expectedHashPromise: Promise<string> | null = null;
function getExpectedHash(): Promise<string> {
    if (!expectedHashPromise) {
        expectedHashPromise = sha256('heyfreeda2026');
    }
    return expectedHashPromise;
}

interface Props {
    children: ReactNode;
}

export default function PassphraseGate({children}: Props) {
    const [authenticated, setAuthenticated] = useState(
        () => sessionStorage.getItem(SESSION_KEY) === 'true'
    );
    const [passphrase, setPassphrase] = useState('');
    const [error, setError] = useState('');

    // Eagerly compute the expected hash on mount
    useEffect(() => {
        getExpectedHash();
    }, []);

    const handleSubmit = useCallback(
        async (e: FormEvent) => {
            e.preventDefault();
            setError('');

            const [inputHash, expected] = await Promise.all([
                sha256(passphrase.trim()),
                getExpectedHash()
            ]);

            if (inputHash === expected) {
                sessionStorage.setItem(SESSION_KEY, 'true');
                setAuthenticated(true);
            } else {
                setError('Falscher Zugangsschlüssel');
            }
        },
        [passphrase]
    );

    if (authenticated) {
        return <>{children}</>;
    }

    return (
        <div className="flex min-h-[60vh] items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6 text-center">
                <h1 className="text-3xl font-bold uppercase tracking-wide">Internes Tool</h1>
                <p className="text-gray-400">Bitte Zugangsschlüssel eingeben</p>

                <input
                    type="password"
                    value={passphrase}
                    onChange={e => setPassphrase(e.target.value)}
                    className="w-full rounded-lg border border-freeda-gray-light bg-freeda-gray px-4 py-3 text-white placeholder-gray-500 focus:border-freeda-pink focus:outline-none focus:ring-1 focus:ring-freeda-pink"
                    placeholder="Zugangsschlüssel"
                    autoFocus
                />

                {error && <p className="text-sm text-freeda-pink">{error}</p>}

                <button
                    type="submit"
                    className="min-h-[44px] w-full rounded-lg bg-freeda-pink px-8 py-3 font-bold text-white transition-colors hover:bg-freeda-pink-dark focus:outline-none focus:ring-2 focus:ring-freeda-pink focus:ring-offset-2 focus:ring-offset-freeda-black"
                >
                    Weiter
                </button>
            </form>
        </div>
    );
}
