import React from 'react';
import { Link } from 'gatsby';
import "../styles/global.css";
import "../styles/layout.css";
import "../styles/page.css";

import BannerImage from '../components/BannerImage';

function MainLayout({ children }) {
    return (
        <div className='global-container'>
            <nav className='navbar'>
                <ul>
                    <li>
                        <Link to='/'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='info'>Info</Link>
                    </li>
                    <li>
                        <Link to='tutorials'>Tutoriales</Link>
                    </li>
                    <li>
                        <Link to='rules'>Reglas</Link>
                    </li>
                    <li>
                        <Link to='news'>Noticias</Link>
                    </li>
                </ul>
            </nav>
            <BannerImage />
            <main className='page-container'>
                { children }
            </main>
            <footer className='footer'></footer>
        </div>
    );
}

export default MainLayout;