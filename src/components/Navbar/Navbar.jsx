import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import logo from '../Assets/KDHlogo.png';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo} alt="logo" />
          </div>

          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={() => {
                  if (window.location.pathname === "/") {
                    window.location.reload(); // Force reload
                  }
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/programs" className="nav-link">
                Programs
              </NavLink>
            </li>
            <li>
              <NavLink to="/media" className="nav-link">
                Media
              </NavLink>
            </li>
          </ul>

          <NavLink to="/donate" className="donate-btn">
            Donate Now
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
