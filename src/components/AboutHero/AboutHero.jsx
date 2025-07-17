import React from 'react';
import './AboutHero.css';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-overlay">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <div className="underline"></div>

          <div className="breadcrumb">
            <Link to="/">Home</Link> <span className='breadcrumbs-arrow'> &gt;&gt;</span>About
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutHero;
