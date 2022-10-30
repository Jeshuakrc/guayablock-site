import { Link } from 'gatsby';
import React from 'react';
import "../styles/routeButton.css"

function RouteButton({ to, children }) {


    return (
        <Link className='route-button' to={ to || window.location.href }>{ children }</Link>
    );
}

export default RouteButton;