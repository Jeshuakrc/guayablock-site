import React, { createContext, useEffect, useState } from 'react';
import Navbar, { NavDisplay } from '../components/Navbar';
import "../styles/global.css";
import "../styles/layout.css";
import "../styles/page.css";

import BannerImage from '../components/BannerImage';

export const layoutContext = createContext(null);

export default function({ children, location }) {

    const [ navbarDisplay, setNavBarDisplay ] = useState(NavDisplay.normal);
    const [ showHome, setShowHome ] = useState(true);

    const context = {
        navbar: {
            display: navbarDisplay,
            setDisplay: setNavBarDisplay,
            setShowHome: setShowHome,
        }
    }
    
    return (
        <div className='global-container'>
            <Navbar display={navbarDisplay} />
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