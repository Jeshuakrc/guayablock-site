import React, { createContext, useEffect, useState } from 'react';
import Navbar, { NavDisplay } from '../components/Navbar';
import "../styles/global.css";
import "../styles/layout.css";
import "../styles/page.css";
import BannerImage from '../components/BannerImage';


const _mobileMediaQuery = "(max-width: 800px)";
const _mobileModeEventListeners = [];
let _mobileMode;
function _mediaEventHandler(isMobileMode, stateSetter) {
    if (isMobileMode === _mobileMode) { return; }
    stateSetter(isMobileMode);
    _mobileModeEventListeners.forEach(listener => {
        listener(isMobileMode);
    });
    _mobileMode = isMobileMode;
}

export const layoutContext = createContext(null);

export default function({ children, location }) {

    const [ navbarDisplay, setNavBarDisplay ] = useState(NavDisplay.normal);
    const [ showHome, setShowHome ] = useState(true);
    const [ mobileMode, setMobileMode ] = useState(null);

    useEffect(() => {
        let q = window.matchMedia(_mobileMediaQuery);
        const handler = (query) => _mediaEventHandler(query.matches, setMobileMode);
        q.addEventListener("change", handler)
        _mediaEventHandler(q.matches, setMobileMode)
        
        return () => q.removeEventListener("change",handler);
    }); 

    const context = {
        navbar: {
            display: navbarDisplay,
            setDisplay: setNavBarDisplay,
            setShowHome: setShowHome,
        },
        media: {
            mobileMode: mobileMode,
            addEventListener: (listener) => _mobileModeEventListeners.push(listener)
        }
    }
    
    return (
        <div className='global-container'>
            <Navbar display={navbarDisplay} mobileMode={mobileMode} />
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