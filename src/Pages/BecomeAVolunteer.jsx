import React from 'react'
import { useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import FooterCA from '../Components/FooterCA/FooterCA';
import BottomFooter from '../Components/BottomFooter/BottomFooter';
import volunteerImg from '../Components/Assets/KdhVON.jpeg'
import './Style/BecomeAVolunteer.css';

const BecomeAVolunteer = () => {
  useEffect(() => {
    document.body.classList.add('volunteer-page-body');
    return () => {
      document.body.classList.remove('volunteer-page-body');
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="volunteer-hero-section">
        <img src={volunteerImg} alt="Volunteer" className="volunteer-hero-img" />
        <div className="volunteer-hero-text">
          <h1>Become a Volunteer</h1>
          <p>
            Help us bring hope, food, and support to children and families in need. Your time, your presence, and your care can change lives.
          </p>
        </div>
      </div>

      <section className="volunteer-info-section">
        <h2>Why Volunteer With Us?</h2>
        <p>
          At Kids Dream Haven, we believe in the power of community. Volunteering gives you the chance to directly impact lives whether it’s feeding 2,000 kids during the holidays, supporting hospital bills, or helping at our outreach programs.
        </p>

        <h3>Ways You Can Help</h3>
        <ul>
          <li>Event Day Support (Food distribution, logistics, hospitality)</li>
          <li>Medical Outreach Support</li>
          <li>Photography / Media Coverage</li>
          <li>Social Media / Awareness</li>
          <li>Administrative and Fundraising Help</li>
        </ul>

        <h3>Ready to Get Involved?</h3>
        <p>Fill out the form below or send us an email and we’ll get back to you with volunteer opportunities that match your passion and schedule.</p>

        <a href="mailto:info@kidsdreamhaven.org" className="volunteer-cta-btn">
          Email Us to Volunteer
        </a>
      </section>

      <FooterCA />
      <BottomFooter />
    </>
  )
}

export default BecomeAVolunteer
