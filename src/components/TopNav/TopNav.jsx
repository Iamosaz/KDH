import React from 'react';
import './TopNav.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'


const TopNavbar = () => {
  return (
    <div className="topnav">
      <div className="topnav-left">
        <a href="mailto:info@kdh.org" className="topnav-link">
          <MdEmail className="icon" />
          info@kdh.org
        </a>
      </div>
      {/* social Media link topbar*/}
      <div className="topnav-right">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="topnav-link">
          <FaFacebookF className="icon1" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="topnav-link">
          <FaInstagram className="icon1" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="topnav-link">
          <FaLinkedinIn className="icon1" />
        </a>
      </div>
    </div>
  );
};

export default TopNavbar
