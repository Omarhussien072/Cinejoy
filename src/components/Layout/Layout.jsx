import LayoutStyles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';

export default function Layout() {
    return (
        <>
            <main className='min-h-screen'>
                <Navbar />
                    <Outlet />
                <Footer />
            </main>
        </>
    );
}
