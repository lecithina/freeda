import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Layout from './components/Layout.js';
import QuestionnairePage from './pages/QuestionnairePage.js';
import AssessmentPage from './pages/AssessmentPage.js';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/questionnaire" element={<QuestionnairePage />} />
                    <Route path="/assessment" element={<AssessmentPage />} />
                </Route>
                {/* Everything else → heyfreeda.com */}
                <Route path="*" element={<ExternalRedirect />} />
            </Routes>
        </BrowserRouter>
    );
}

function ExternalRedirect() {
    window.location.replace('https://www.heyfreeda.com/');
    return null;
}
