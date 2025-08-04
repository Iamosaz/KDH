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
              In December 2024, Kids Dream Haven Foundation carried out Project
              Love in Action in Lagos, Nigeria, with the heartfelt goal of
              spreading joy, dignity, and the spirit of Christmas to families
              facing financial hardship. Understanding that many families in
              underserved communities struggle to afford even the most basic
              festive meals, our team focused on restoring that holiday magic,
              especially for children. Through this initiative, 500 live
              chickens were purchased and distributed, one chicken per child,
              ensuring that 500 families could experience the warmth and
              tradition of a home cooked Christmas meal. This act of love went
              beyond food, it represented hope, belonging, and the belief that
              every child deserves to feel seen, valued, and celebrated
              especially during the holidays. The excitement and gratitude in
              the eyes of the children and their families reminded us why we do
              what we do. Project Love in Action, is a testament to our
              commitment at Kids Dream Haven Foundation to support families in
              meaningful, culturally sensitive ways that honour their dignity
              and uplift their spirits.
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
