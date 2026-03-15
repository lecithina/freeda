import {Outlet} from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';

export default function Layout() {
    return (
        <div className="flex min-h-full flex-col bg-freeda-black text-freeda-white">
            <Header />
            <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-8">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
