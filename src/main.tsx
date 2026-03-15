import ReactDOM from 'react-dom/client';
import {FreedaProvider} from './model/FreedaContext.js';
import App from './App.js';
import './i18n/i18n.js';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <FreedaProvider>
            <App />
        </FreedaProvider>
    );
}
