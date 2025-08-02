import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../Assets/KDHlogo.png';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [transparent, setNavColor] = useState('#fff');
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState('home');
  
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (menuName) => {
    setMenu(menuName);
    setIsOpen(false); 
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavColor('transparent');
      } else {
        setNavColor('#fff');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <header>
      <nav
        className={`navbar ${isAboutPage ? 'navbar-about' : ''}`}
        style={{ backgroundColor: 'transparent' }}
      >
        <div className="nav-container5">
          <div className="nav-logo">
            <img src={logo} alt="logo" />
          </div>
          
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                onClick={() => {
                  if (window.location.pathname === '/') {
                    window.location.reload();
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
          
          {/* Separate donate button - hidden on mobile */}
          <NavLink to="/donate" className="donate-btn">
            Donate Now
          </NavLink>
          
          <div className="nav-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <ul className="nav-menu-open">
            <li onClick={() => handleLinkClick('home')}>
              <Link to="/">Home</Link> {menu === 'home' && <hr />}
            </li>
            <li onClick={() => handleLinkClick('about')}>
              <Link to="/about">About Us</Link> {menu === 'about' && <hr />}
            </li>
            <li onClick={() => handleLinkClick('programs')}>
              <Link to="/programs">Programs</Link> {menu === 'programs' && <hr />}
            </li>
            <li onClick={() => handleLinkClick('media')}>
              <Link to="/media">Media</Link> {menu === 'media' && <hr />}
            </li>
            <div className="mobile_nav-login" onClick={() => handleLinkClick('donate')}>
              <Link to="/donate">Donate Now</Link>
            </div>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;