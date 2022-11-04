import React, { createContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";
import "../styles/layout.css";
import "../styles/page.css";

import BannerImage from '../components/BannerImage';

export const layoutContext = createContext(null);

export default function({ children, location }) {

    const [ isNavBarCollapsed, setNavBarCollapsed ] = useState(false);
    const [ showHome, setShowHome ] = useState(true);
    const toggleCollapsed = () => {
        setNavBarCollapsed(!isNavBarCollapsed);
    }

    const context = {
        navBar: {
            setCollabsed: setNavBarCollapsed,
            setShowHome: setShowHome,
            toggleCollapsed: toggleCollapsed
        }
    }

    return (
        <div className='global-container'>
            <nav className={`${(isNavBarCollapsed) ? "collapsed " : ""}navbar`}>
                <StaticImage className='navbar-logo' src='../images/logo.png' alt='logo' />
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
                <layoutContext.Provider value={context}>
                    { children }
                </layoutContext.Provider>
            </main>
            <footer className='footer'></footer>
        </div>
    );
}