import React from 'react'
import './BottomFooter.css'
import { NavLink, useLocation } from 'react-router-dom';

const BottomFooter = () => {

  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
     <div className={`footer-bottom ${isAboutPage ? 'about-footer' : ''}`}>
      <nav className='footer-bottom-container4'>
        <div className='nav-container4'>
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

export default BottomFooter
