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
            Building Brighter Futures, One Child at a Time Kids Dream Haven
            Foundation (KDH) was founded in 2024 with a mission to improve the
            lives of children and their families by providing a nurturing,
            supportive environment where kids can thrive, dream, and reach their
            full potential. We believe that every child deserves the chance to
            grow in a space filled with love, encouragement, and opportunity
            regardless of their background or life circumstances. Through
            creative programs, educational support, community outreach, and
            family focused initiatives, we are building safe havens where
            childhood is protected, potential is unlocked, and dreams are
            nurtured. Our foundation is rooted in compassion, inclusivity, and
            the belief that it takes a village to raise a child. We work closely
            with families, educators, volunteers, and community partners to
            ensure our impact is meaningful and lasting. At Kids Dream Haven
            Foundation, we’re not just improving lives, we’re creating a future
            where every child feels seen, valued and empowered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
