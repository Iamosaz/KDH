import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './Style/PastProgram.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from '../Components/Navbar/Navbar';
import FooterBottom from '../components/FooterBottom/FooterBottom';
import FooterCTA from '../components/FooterCTA/FooterCTA';

import img1 from '../Components/Assets/Camp.jpeg';
import img2 from '../Components/Assets/camp1.jpeg';
import img3 from '../Components/Assets/camp2.jpeg';

const PastProgram = () => {
  useEffect(() => {
    document.body.classList.add("pastprogram-page-body");
    return () => {
      document.body.classList.remove("pastprogram-page-body");
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

      <div className="past-wrapper">
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
        <section className="past-content">
          <div className="past">
            <h1 className="program-title">March Break Camp (MBC)</h1>
             <p>This past March break, Kids Dream Haven successfully hosted an exciting and memorable camp experience that brought together creativity, learning, and endless fun for children aged 6 and above. The camp was took place in bramptom,Canada which was filled with a wide range of engaging activities, including arts and crafts, storytelling sessions, team games, and creative workshops that encouraged self-expression and teamwork. Each day began with a warm welcome and a healthy breakfast, followed by interactive sessions designed to spark curiosity and imagination. Campers also enjoyed nutritious lunch breaks, creating space to recharge and socialize. From painting and sculpting to group challenges and hands-on projects, every child had the opportunity to explore new skills and make lasting memories. The energy, laughter, and creativity that filled the air truly made this March Break Camp an unforgettable experience for all who attended.</p>
          </div>
        </section>
       
      </div>

      <FooterCTA />
      <FooterBottom />
    </>
  );
};

export default PastProgram;
