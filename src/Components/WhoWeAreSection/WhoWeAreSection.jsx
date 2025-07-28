import React from 'react';
import './WhoWeAreSection.css';
import whoImage from '../Assets/KDHlogo.png'; // Adjust path to your image

const WhoWeAreSection = () => {
  return (
    <section className="who-we-are-section">
      <div className="who-we-are-container">
        <div className="who-image">
          <img src={whoImage} alt="Who We Are" />
        </div>

        <div className="who-text-content">
          <h2>Who We Are</h2>
          <h3>Improving Children’s Lives</h3>
          <div className="underline-about"></div>
          {/* <div className="since-box">Since 2007</div> */}

          <p>
            Kids Dream Haven Foundation was founded in 2024 and carries out a mission of being dedicated to improving the lives of children and thier families, by providing nurturing environment where kids can thrive,dream, and achieve thier full potential and also providing health care assistance to the most needy in the Canada. 
            <br/>
            <br/>
            We believe that every child deserves a chance at a better life, and we are committed to making that a reality through our various outreach programs and initiatives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
