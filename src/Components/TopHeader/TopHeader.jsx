import React from 'react';
import './TopHeader.css';
import { FaTiktok, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const TopHeader = () => {
  return (
    <div className="topheader">
      <div className="topheader-left">
        <a href="mailto:info@kdh.org" className="topheader-link">
          <MdEmail className="icon" />
          info@kdh.orgs
        </a>
      </div>
      
      <div className="topheader-right">
        <a href="https://www.tiktok.com/@kidsdreamhaven?_t=ZS-8yUOF3mvYnA&_r=1" target="_blank" rel="noopener noreferrer" className="topnav-link">
          <FaTiktok className="icon1" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="topnav-link">
          <FaInstagram className="icon1" />
        </a>
        <a href="https://ca.linkedin.com/in/kids-dream-haven-foundation-kdh-b04393319" target="_blank" rel="noopener noreferrer" className="topheader-link">
          <FaLinkedinIn className="icon1" />
        </a>
      </div>
    </div>
  );
};

export default TopHeader;
