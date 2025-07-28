import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './Style/DomesticProgram.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from '../Components/Navbar/Navbar';
import img1 from '../Components/Assets/Program8.jpeg';
import img2 from '../Components/Assets/Program1.jpeg';
import img3 from '../Components/Assets/Program7.jpeg';
import FooterCA from '../Components/FooterCA/FooterCA';
import BottomFooter from '../Components/BottomFooter/BottomFooter';

const DomesticProgram = () => {
  useEffect(() => {
    document.body.classList.add("domesticprogram-page-body");
    return () => {
      document.body.classList.remove("domesticprogram-page-body");
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Navbar />

      <div className="domestic-wrapper">
        {/* === Image Slider === */}
        <div className="image-slider">
          <Slider {...settings}>
            <div>
              <img src={img1} alt="Program 1" />
            </div>
            <div>
              <img src={img2} alt="Program 2" />
            </div>
            <div>
              <img src={img3} alt="Program 3" />
            </div>
          </Slider>
        </div>

        {/* === Content Section === */}
        <section className="domestic-content">
          <div className="shell">
            <h1 className="program-title">Make a Difference – Charity Outreach (Madco)</h1>
            <p>
              As part of our ongoing commitment to community service and social impact, Kids Dream Haven proudly carried out the "Make a Difference" initiative—an outreach project focused on supporting those in need. During this charity effort, we visited Module Cole, which was located in Lagos Nigeria, where we donated a variety of essential items including food supplies, cleaning products, and hygiene essentials to help improve the daily living conditions of the residents. Our team spent time engaging with the community, listening to their stories, and sharing words of encouragement. The visit wasn’t just about the items we brought, but also about showing compassion, presence, and solidarity. Volunteers from our organization worked together to pack, deliver, and distribute the donations, creating a warm, meaningful experience for everyone involved. This project served as a reminder of how small acts of kindness can collectively make a big difference, and we remain dedicated to continuing similar charitable activities that uplift and empower vulnerable communities.
            </p>
          </div>
        </section>

        {/* === Video Section === */}
        <section className="video-section">
          <div className="video-shell">
            <video width="100%" height="auto" controls>
              <source src="/instbook.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-description">
            <h2>Behind the Scenes</h2>
            <p>
              Watch this short clip of our volunteers in action during the outreach. It captures the joy, connection, and impact we made together as a team. This video reflects the true spirit of giving and the smiles we brought to faces.
            </p>
          </div>
        </section>
      </div>

      <FooterCA />
      <BottomFooter />
    </>
  );
};

export default DomesticProgram;
