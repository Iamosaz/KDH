import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './Style/PastProgram.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../Components/Navbar/Navbar';
import img1 from '../Components/Assets/PastP1.jpeg';
import img2 from '../Components/Assets/PastP2.jpeg';
import img3 from '../Components/Assets/PastP3.jpeg';
import img4 from '../Components/Assets/PastP4.jpeg';
import img5 from '../Components/Assets/PastP5.jpeg';
import img6 from '../Components/Assets/PastP6.jpeg';
import BottomFooter from '../Components/BottomFooter/BottomFooter';
import FooterCA from '../Components/FooterCA/FooterCA';

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
             <div>
              <img src={img4} alt="Program 4" />
            </div>
             <div>
              <img src={img5} alt="Program 5" />
            </div>
             <div>
              <img src={img6} alt="Program 6" />
            </div>
             {/* <div>
              <img src={img3} alt="Program 6" />
            </div> */}
          </Slider>
        </div>

        {/* === Content Section === */}
        <section className="past-content">
          <div className="past">
            {/* <h1 className="program-title">
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
            <br/>
            <br/> */}

            <h1 className="program-title">
              PROJECT LOVE IN ACTION 2.0 - Toronto, Canada (December 2024)
            </h1>
            <p>
              Project Love in Action 2.0 – Toronto December 2024 was pure
                magic for Kids Dream Haven Foundation as we brought Project Love
                in Action to Toronto. Over 350 brand-new Christmas gifts,
                wrapped in sparkling paper, were given out with one
                mission spread joy, wonder, and the true spirit of giving. We
                began at a local church’s Christmas party, where laughter filled
                the air and children aged 5 to 15 received thoughtful,
                age appropriate presents. To make it unforgettable, our Director
                stepped in as Santa Claus, delivering each gift with smiles,
                giggles, and holiday magic. Then, with more gifts in hand, our
                Santa led crew brought surprise presents to Yorkdale
                Mall turning an ordinary day into unforgettable Christmas
                memories. Project Love in Action – Toronto wasn’t just about
                presents—it was about connection, kindness, and proving that
                even in a busy city, the holiday spirit can shine brighter than
                ever.
            </p>
          </div>
        </section>
      </div>

      <FooterCA />
      <BottomFooter />
    </>
  );
};

export default PastProgram;
