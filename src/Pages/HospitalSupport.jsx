
import Navbar from '../Components/Navbar/Navbar';
import FooterCA from '../Components/FooterCA/FooterCA';
import BottomFooter from '../Components/BottomFooter/BottomFooter';
import hospitalImg  from '../Components/Assets/movement1.jpg'
import './Style/HospitalSupport.css';
import React, { useEffect } from 'react';

const HospitalSupport = () => {

  useEffect(() => {
      document.body.classList.add("hospitalS-page-body");
      return () => {
        document.body.classList.remove("hospitalS-page-body");  // i used this to just my navbar.jsx in about pagestructure and styling //
      };
    }, []);
  
  return (
    <>
      <Navbar />
      <div className="movement-detail-wrapper">
        <img src={hospitalImg} alt="Hospital Support" className="movement-hero" />
        <div className="movement-content">
          <h1>Hospital Bills Support</h1>
          <p>
            This initiative aims to relieve the financial burden on families with children facing health challenges.
            We ensure that these children receive the necessary medical care and treatment — completely free of charge. 
            Through this program, we cover hospital bills so that families can focus on healing and hope, rather than cost.
          </p>
          <p>
            We believe every child deserves the best chance at life, regardless of their background or financial condition.
            Our work continues to bring smiles and strength to families across Oakville and beyond.
          </p>
        </div>
      </div>
      <FooterCA />
      <BottomFooter />
    </>
  );
};

export default HospitalSupport
