import React, { Fragment, useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import MenuIcon from "../images/menuIcon.svg";
import Arrow from "../images/arrow.svg";
import Title from "../images/title.svg"
import "../styles/navbar.css"
import { useRef } from 'react';
import { useEffect } from 'react';


export const NavDisplay = Object.freeze({
    collapsed: Symbol(),
    normal: Symbol(),
    expanded: Symbol()
})

//Constant values
const _baseHeight = 64;
const _expandedHeight = 380;

//Private components
const NavbarBase = ({ className = "", children, display }) => (
    <nav
    className={`navbar ${className}`}
    style={{
        paddingBottom: (display === NavDisplay.collapsed) ? "20px" : "0" ,
        top: (display === NavDisplay.collapsed) ? -_baseHeight : "0",
        height: (display === NavDisplay.expanded) ? _expandedHeight : _baseHeight,
    }}
    >   
        { children }
    </nav>
);

const LinkList = ({ onItemClick }) => (
    <ul className='navbar-linklist'>
        <li>
            <Link to='/' onClick={onItemClick}>Inicio</Link>
        </li>
        <li>
            <Link to='/info' onClick={onItemClick}>Info</Link>
        </li>
        <li>
            <Link to='/tutorials' onClick={onItemClick}>Tutoriales</Link>
        </li>
        <li>
            <Link to='/rules' onClick={onItemClick}>Reglas</Link>
        </li>
        <li>
            <Link to='/news' onClick={onItemClick}>Noticias</Link>
        </li>
    </ul>
);

const DesktopNavbar = ({ display }) => (
    <NavbarBase className='desktop-navbar' display={display}>
        <div>
            <Link className='navbar-logo' to="/" style={(display === NavDisplay.collapsed) ? {"margin-top": -60} : {}}>
                <StaticImage src='../images/logo.png' alt='logo' layout='constrained' height={92} />
            </Link>
            <LinkList />
        </div>
    </NavbarBase>
);

function MobileNavbar ({ display, onMenuClick, onItemClick }) {
    const expanded = display === NavDisplay.expanded;
    const collapsed = display === NavDisplay.collapsed;
    document.body.style.overflow = (expanded) ? "hidden" : "auto";
    const navList = useRef(null);
    useEffect(() => {
        if (expanded) {
            navList.current.style.display = "flex";
        } else if (collapsed) {
            navList.current.style.display = "none";
        }
    })

    return (
    <Fragment>
        {
            expanded &&
            <div style={{
                position: "fixed",
                height: "100vh",
                width: "100vw",
                backgroundColor: "rgba(87, 0, 38,.3)",
                zIndex: 3
            }} />
        }
        <NavbarBase className="mobile-navbar" display={display}>
            <div style={{

            }}> 
                {
                    (expanded)
                    ? <Arrow className="navbar-mobile-menu" onClick={onMenuClick} style={{
                        height: 16,
                        marginTop: 15,
                        rotate: "90deg"
                    }} />
                    : <MenuIcon className="navbar-mobile-menu" onClick={onMenuClick} />
                }
                <Link className='navbar-logo' to="/" style={(display === NavDisplay.collapsed) ? {"margin-top": -60} : {}}>
                    <StaticImage src='../images/logo.png' alt='logo' layout='constrained' height={92} />
                </Link>
            </div>
            <div style={{
                overflow: 'hidden',
                marginTop: _baseHeight,
                height: `calc(100% - ${_baseHeight}px)`,
                padding: (expanded) ? 36 : 0
            }}
            ref={navList}
            >
                <LinkList onItemClick={onItemClick} />
            </div>
        </NavbarBase>
    </Fragment>
    );
}

export default function({ display, mobileMode }) {
    
    const [forceExpanded, setForceExpanded] = useState(false);
    if (forceExpanded && mobileMode) {
        display = NavDisplay.expanded;
    } else {
        display = display ?? NavDisplay.normal;
    }

    return (
        mobileMode
        ? <MobileNavbar
        display={display}
        onMenuClick={() => setForceExpanded(!forceExpanded)}
        onItemClick={() => setForceExpanded(false)}
        />
        : <DesktopNavbar display={display} />
    )
}