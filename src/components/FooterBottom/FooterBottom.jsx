import React from 'react';
import './FooterBottom.css';
import { NavLink } from 'react-router-dom';

const FooterBottom = () => {
  return (
    <div className='footer-bottom'>
      <nav className='footer-bottom-container'>
        <div className='nav-container'>

          <ul className='nav-links'>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/programs" className="nav-link">Programs</NavLink>
            </li>
            <li>
              <NavLink to="/media" className="nav-link">Media</NavLink>
            </li>
          </ul>

          <p className="footer-copy-text">
            Kids Dream Haven © 2025 All Rights Reserved.
          </p>

        </div>
      </nav>
    </div>
  );
};

export default FooterBottom;
