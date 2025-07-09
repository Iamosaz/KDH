import React from 'react';
import './FooterCTA.css';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import logo from '../Assets/KDHlogo.png';

import { NavLink } from 'react-router-dom';

const FooterCTA = () => {
  return (
    <section className="footer-cta-section">
      <div className="footer-cta-container">
        <div className="footer-left">
        <img src={logo} alt="KDH Logo" className="footer-logo" />
          <p className="footer-description">
            Kids Dream Haven (KDH) was established in 2024 with a vision
            of improving the lives of children and thier families.
          </p>
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <h3>Quick Links</h3>
          <p>
            <a href="mailto:info@kdh.org" className="footer-link">
              <MdEmail className="icon" />
              info@kdh.org
            </a>
          </p>

          <p>
            <a
              href="https://goo.gl/maps/example" // Replace with real Google Maps link
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <MdLocationOn className="icon" />
              Mailing Address: P.O. Box 123, Nigeria
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FooterCTA
