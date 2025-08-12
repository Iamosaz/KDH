import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './Style/OtherProgram.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../Components/Navbar/Navbar';
import img1 from '../Components/Assets/Program1.jpeg';
import img2 from '../Components/Assets/Program2.jpeg';
import img3 from '../Components/Assets/Program3.jpeg';
import img4 from '../Components/Assets/Program4.jpeg';
import FooterCA from '../Components/FooterCA/FooterCA';
import BottomFooter from '../Components/BottomFooter/BottomFooter';


const OtherPrograms = () => {
   useEffect(() => {
    document.body.classList.add("otherprogram-page-body");
    return () => {
      document.body.classList.remove("otherprogram-page-body");
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

      <div className="other-wrapper">
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
            <div>
              <img src={img4} alt="Program 4" />
            </div>
            
          </Slider>
        </div>

        {/* === Content Section === */}
        <section className="other-content">
          <div className="other">
            <h1 className="program-title">
              PROJECT LOVE IN ACTION - Lagos, Nigeria (December 2024)
            </h1>
            <p>
             Project Love in Action – Christmas 2024 Last December in Lagos,
                Kids Dream Haven Foundation brought the true spirit of Christmas
                to life for 500 families in need. With love at the heart of our
                mission, we delivered one live chicken to every child a simple
                gift that meant a warm, home cooked festive meal for each
                family. For many, it was more than food it was dignity, joy, and
                the feeling of being seen and valued. The laughter of children,
                the smiles of parents, and the sparkle of hope reminded us why
                we do what we do. Project Love in Action wasn’t just about
                Christmas it was about creating moments of belonging that last
                far beyond the season.
            </p>
          </div>
        </section>
      </div>

      <FooterCA />
      <BottomFooter />
    </>
  );
};

export default OtherPrograms
