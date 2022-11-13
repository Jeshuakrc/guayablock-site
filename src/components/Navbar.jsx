import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import MenuIcon from "../images/menuIcon.svg";
import Style from "../styles/navbar.css"
import { useEffect } from 'react';


const baseHeight = 64;

export const NavDisplay = Object.freeze({
    collapsed: Symbol(),
    normal: Symbol(),
    expanded: Symbol()
})

export default function({ display }) {
    
    const [forceExpanded, setForceExpanded] = useState(false);

    if (forceExpanded) {
        display = NavDisplay.expanded;
    } else {
        display = display ?? NavDisplay.normal;
    }

    useEffect(() => console.log("reloaded navbar"));

    return (
        <nav
        className="navbar"
        style={{
            padding: (display === NavDisplay.collapsed) ? "0 4% 20px 4%" : "0 4%" ,
            top: (display === NavDisplay.collapsed) ? -baseHeight : "0",
            height: (display === NavDisplay.expanded) ? 640 : 64
        }}
        >
            <Link className='navbar-logo' to="/">
                <StaticImage src='../images/logo.png' alt='logo' />
            </Link>
            <MenuIcon className="navbar-mobile-menu" onClick={() => setForceExpanded(true)} />
            <ul className='navbar-descktop-navlist'>
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='/info'>Info</Link>
                </li>
                <li>
                    <Link to='/tutorials'>Tutoriales</Link>
                </li>
                <li>
                    <Link to='/rules'>Reglas</Link>
                </li>
                <li>
                    <Link to='/news'>Noticias</Link>
                </li>
            </ul>
        </nav>
    );
}