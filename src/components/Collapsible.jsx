import { StaticImage } from 'gatsby-plugin-image';
import "../styles/collapsible.css";
import React, { useState, useRef, useEffect } from 'react';
import Arrow from "../images/arrow.svg"

export default function({ children, title }) {

    const [isCollapsed, setCollapsed] = useState(true);
    const head = useRef(null);
    const content = useRef(null);
    const ths = useRef(null);
    const getHeight = () => head.current.clientHeight + (isCollapsed ? 0 : content.current.clientHeight) + "px";
    
    useEffect(() => {
        ths.current.style.height = head.current.clientHeight + (isCollapsed ? 0 : content.current.clientHeight) + "px"
    });

    return (
        <div ref={ths} className="collapsible">
            <div ref={head} className="collapsible-head" onClick={() => setCollapsed(!isCollapsed)}>
                <h2>{ title }</h2>
                <button className='collapsible-button'>
                    <Arrow />
                </button>
            </div>
            <div ref={content} className="collapsible-content">
                { children }
            </div>
        </div>
    );
}
