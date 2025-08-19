import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './Style/DomesticProgram.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from '../Components/Navbar/Navbar';
import img1 from '../Components/Assets/Modupe1.jpeg';
import img2 from '../Components/Assets/Program15.jpeg';
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
              <img src={img1} alt="Program 1" loading="lazy" />
            </div>
            <div>
              <img src={img2} alt="Program 2" loading="lazy" />
            </div>
            <div>
              <img src={img3} alt="Program 3" loading="lazy" />
            </div>
          </Slider>
        </div>

        {/* === Content Section === */}
        <section className="domestic-content">
          <div className="shell">
            <h1 className="program-title">
              Make a Difference – Charity Outreach (Madco)
            </h1>
            <p>
              Project Make a Difference – Modupe Cole Outreach In July 2024,
              Kids Dream Haven Foundation took a step closer to its mission of
              touching lives with compassion by visiting Modupe Cole Memorial
              Child Care & Treatment Home School in Lagos a safe haven for
              children living with disabilities. With hearts full of love, our
              team came bearing essentials carefully chosen to bring comfort and
              joy, home cooked meals, school supplies, diapers, toiletries, and
              personal care items. But beyond the gifts, we shared laughter,
              conversations, and moments that reminded us that every child
              regardless of ability deserves to feel valued, loved, and
              supported. This wasn’t just an outreach it was a celebration of
              dignity, hope, and the belief that every child can thrive when
              surrounded by care and kindness. Project Make a Difference is our
              promise to continue standing beside vulnerable communities, one
              child at a time.
            </p>
          </div>
        </section>

        {/* === Video Section === */}
        <section className="video-section">
          <div className="video-shell">
            <video
              controls
              preload="metadata"
              poster="/images/video-placeholder.jpg"  // optional thumbnail
              className="program-video"
            >
              <source src="/videos/Modupe.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-description">
            <h2>Behind the Scenes</h2>
            <p>
              Watch this short clip of our volunteers in action during the
              outreach. It captures the joy, connection, and impact we made
              together as a team. This video reflects the true spirit of giving
              and the smiles we brought to faces.
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
