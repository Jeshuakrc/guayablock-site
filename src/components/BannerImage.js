import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import "../styles/bannerImage.css"


export default () => (
    <div className='banner-image'>
        <div className='banner-image-border' />
        <StaticImage src='../images/banner.png' alt="banner"/> 
    </div>
)