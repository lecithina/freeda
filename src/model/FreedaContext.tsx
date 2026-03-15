import {createContext, useContext, useEffect, useState, type ReactNode} from 'react';
import FreedaModel from './FreedaModel.js';
import {allQuestionnaires} from '../questionnaires/index.js';

const FreedaContext = createContext<FreedaModel | null>(null);

export function useFreeda(): FreedaModel {
    const model = useContext(FreedaContext);
    if (!model) {
        throw new Error('useFreeda must be used within a FreedaProvider');
    }
    return model;
}

export function FreedaProvider({children}: {children: ReactNode}) {
    const [model, setModel] = useState<FreedaModel | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const freedaModel = new FreedaModel();
        freedaModel.setQuestionnaires(allQuestionnaires);

        // Register listener BEFORE loginOrRegister — onReady fires during init
        freedaModel.onReady(() => {
            setModel(freedaModel);
        });

        freedaModel.loginOrRegister().catch(e => {
            console.error('FreedaModel init failed:', e);
            setError(String(e));
        });

        return () => {
            freedaModel.shutdown().catch(console.error);
        };
    }, []);

    if (error) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-freeda-black p-4 text-freeda-white">
                <div className="text-center">
                    <h1 className="mb-4 text-2xl font-bold text-freeda-pink">Initialization Error</h1>
                    <p className="text-gray-400">{error}</p>
                </div>
            </div>
        );
    }

    if (!model) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-freeda-black text-freeda-white">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-freeda-gray-light border-t-freeda-pink" />
                    <p className="text-gray-400">Loading...</p>
                </div>
            </div>
        );
    }

    return <FreedaContext.Provider value={model}>{children}</FreedaContext.Provider>;
}
