import React from 'react'
import { Link } from 'react-router-dom';
import './ProgramHero.css'

const ProgramHero = () => {
  return (
    <section className="program-hero">
      <div className="program-hero-overlay">
        <div className="program-hero-content">
          <h1>Our Programs</h1>
          <div className="underline2"></div>

          <div className="breadcrumb">
            <Link to="/">Home</Link> <span className='breadcrumbs-arrow'> &gt;&gt;</span>Our Programs
          </div>
        </div>
        
      </div>
    </section>
  );
};


export default ProgramHero
