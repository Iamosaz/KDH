import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import FooterCA from '../Components/FooterCA/FooterCA'
import { useEffect } from 'react'
import feedingImg from '../Components/Assets/hd.jpg'
import './Style/FeedingKids.css';
import BottomFooter from '../Components/BottomFooter/BottomFooter'

const FeedingKids = () => {

   useEffect(() => {
        document.body.classList.add("feedingkids-page-body");
        return () => {
          document.body.classList.remove("feedingkids-page-body");  // i used this to just my navbar.jsx in about pagestructure and styling //
        };
      }, []);
      
  return (
      <>
      <Navbar />
      <div className="movement-detail-wrapper1">
        <img src={feedingImg} alt="Feeding 2000 Kids" className="movement-hero1" />
        <div className="movement-content1">
          <h1>Feeding 2000 Kids</h1>
          <p>
            Every holiday season, Kids Dream Haven organizes a heartwarming feast to feed over 2,000 children.
            We provide nutritious meals and foster a joyous atmosphere for kids who might otherwise go hungry or feel forgotten.
          </p>
          <p>
            Our goal is to ensure every child experiences love, warmth, and celebration, especially during the festive season.
            This event brings together volunteers, donors, and communities to create unforgettable memories.
          </p>
        </div>
      </div>
      <FooterCA />
      <BottomFooter />
    </>
  )
}

export default FeedingKids
