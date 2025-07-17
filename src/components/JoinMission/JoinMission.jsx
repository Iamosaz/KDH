import React from 'react';
import './JoinMission.css';
import bgImage from '../Assets/handle.jpg'; 
const JoinMission = () => {
  return (
    <section
      className="join-mission-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="join-mission-overlay">
        <div className="join-mission-content">
          <h2>Join Our Mission to Help At-Risk child</h2>
          <p>
            Be part of a purpose-driven movement dedicated to uplifting vulnerable communities. 
            Your time, energy, or donation can be the spark of transformation.
          </p>
          <div className="buttons">
            <a href="/donate" className="donate-btn">Donate Now</a>
            <a href="/volunteer" className="volunteer-btn">Become a Volunteer</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMission;