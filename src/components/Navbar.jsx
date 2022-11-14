import React, { Fragment, useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import MenuIcon from "../images/menuIcon.svg";
import Title from "../images/title.svg"
import "../styles/navbar.css"
import { useEffect } from 'react';



const baseHeight = 44;

export const NavDisplay = Object.freeze({
    collapsed: Symbol(),
    normal: Symbol(),
    expanded: Symbol()
})

export default function({ display, mobileMode }) {
    
    const [forceExpanded, setForceExpanded] = useState(false);

    if (forceExpanded) {
        display = NavDisplay.expanded;
    } else {
        display = display ?? NavDisplay.normal;
    }

    useEffect(() => console.log(mobileMode))

    return (
        <nav
        className="navbar"
        style={{
            padding: (display === NavDisplay.collapsed) ? "0 4% 20px 4%" : "12px 4%" ,
            top: (display === NavDisplay.collapsed) ? -baseHeight : "0",
            height: (display === NavDisplay.expanded) ? 640 : 40
        }}
        >   
            {
                mobileMode &&
                <Fragment>
                    <MenuIcon className="navbar-mobile-menu" onClick={() => setForceExpanded(true)} />
                    <Title className="navbar-title" />
                </Fragment>
            }
            <Link className='navbar-logo' to="/" style={(display === NavDisplay.collapsed) ? {"margin-top": -60} : {}}>
                <StaticImage src='../images/logo.png' alt='logo' layout='constrained' height={92} />
            </Link>
            <ul className='navbar-descktop-navlist' style={{display: mobileMode ? "none" : "flex"}}>
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