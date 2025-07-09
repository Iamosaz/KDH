import React from 'react';
import './Topbar.css';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'


const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <a href="mailto:info@kdh.org" className="topbar-link">
          <MdEmail className="icon" />
          info@kdh.org
        </a>
      </div>
      {/* social Media link topbar*/}
      <div className="topbar-right">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="topbar-link">
          <FaFacebookF className="icon1" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="topbar-link">
          <FaInstagram className="icon1" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="topbar-link">
          <FaLinkedin className="icon1" />
        </a>
      </div>
    </div>
  );
};

export default Topbar
