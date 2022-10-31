import { StaticImage } from 'gatsby-plugin-image';
import React, { useContext, useEffect } from 'react';
import RouteButton from '../components/RouteButton';
import { layoutContext } from '../layouts/MainLayout';
import "../styles/index-page.css"

function Index(props) {

  const context = useContext(layoutContext);

  useEffect(() => {
    const collapse = () => context.navBar.setCollabsed(window.scrollY < 600);
    collapse();
    window.addEventListener("scroll", collapse);
    return () => {
      window.removeEventListener("scroll", collapse);
      context.navBar.setCollabsed(false);
    };
  })

  return (
    <div className='page index-page'>
      <div className='heading'>
        <div className='title'>
          <img src='/logo.png' alt='logo' />
          <h1>
            <img src='/title.svg' alt='title' />
            El server survival más prron
          </h1>
        </div>
        <div className='inex-page-links'>
          <RouteButton to="/info">Info</RouteButton>
          <RouteButton to="/tutorials">Tutoriales</RouteButton>
          <RouteButton to="/rules">Reglas</RouteButton>
          <RouteButton to="/news">Noticias</RouteButton>
        </div>
      </div>

      <div className='display'>
      </div>
    </div>
  );
}

export default Index;