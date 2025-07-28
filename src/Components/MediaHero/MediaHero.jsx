import React from 'react'
import { Link } from 'react-router-dom';
import './MediaHero.css'

const ProgramHero = () => {
  return (
    <section className="media-hero">
      <div className="media-hero-overlay">
        <div className="media-hero-content">
          <h1>Media</h1>
          <div className="underline2"></div>

          <div className="breadcrumb">
            <Link to="/">Home</Link> <span className='breadcrumbs-arrow'> &gt;&gt;</span>Media
          </div>
        </div>
        
      </div>
    </section>
  );
};


export default ProgramHero
