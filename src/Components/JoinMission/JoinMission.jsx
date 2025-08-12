import React from 'react';
import './JoinMission.css';
import bgImage from '../Assets/FuturePic.jpeg'; 
import { Link } from 'react-router-dom';

const JoinMission = () => {
  return (
    <section
      className="join-mission-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="join-mission-overlay">
        <div className="join-mission-content">
          <h2>Join Our Mission to Help At-Risk Childiren</h2>
          <p>
        Be part of a purpose driven movement dedicated to uplifting vulnerable communities. Your time, energy, or donation can be the spark that transforms a child’s future.
          </p>
          <div className="buttons">
            <Link to="/donate" className="donate-btn2">Donate Now</Link>
            <Link to="/volunteer" className="volunteer-btn">Become a Volunteer</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMission;
