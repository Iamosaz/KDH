import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import FooterCA from '../Components/FooterCA/FooterCA'
import BottomFooter from '../Components/BottomFooter/BottomFooter'
import widowImg from '../Components/Assets/movement3.jpg'
import './Style/SupportWidows.css';
import { useEffect } from 'react'

const SupportWidows = () => {

  useEffect(() => {
          document.body.classList.add("supportwidow-page-body");
          return () => {
            document.body.classList.remove("supportwidow-page-body");  // i used this to just my navbar.jsx in about pagestructure and styling //
          };
        }, []);
        
  return (
    <>
      <Navbar />
      <div className="movement-detail-wrapper">
        <img src={widowImg} alt="Support for Widows" className="movement-hero" />
        <div className="movement-content">
          <h1>Support for Widows</h1>
          <p>
            In addition to supporting children, Kids Dream Haven extends love and support to widows in need.
            We provide food, clothing, and financial aid to help them navigate challenging times with dignity.
          </p>
          <p>
            Our efforts aim to restore hope and offer a sense of belonging, especially during the holidays.
            These women and their families are not forgotten — they are part of our community and our hearts.
          </p>
        </div>
      </div>
      <FooterCA />
      <BottomFooter />
    </>
  )
}

export default SupportWidows
