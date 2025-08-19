import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './Style/MarchBreak.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../Components/Navbar/Navbar';
import img1 from '../Components/Assets/March1.jpeg';
import img2 from '../Components/Assets/March2.jpeg';
// import img3 from '../Components/Assets/Program3.jpeg';
// import img4 from '../Components/Assets/Program4.jpeg';
import FooterCA from '../Components/FooterCA/FooterCA';
import BottomFooter from '../Components/BottomFooter/BottomFooter';

const MarchBreak = () => {

   useEffect(() => {
      document.body.classList.add("marchbreak-page-body");
      return () => {
        document.body.classList.remove("marchbreak-page-body");
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

      <div className="march-wrapper">
        {/* === Image Slider === */}
        <div className="image-slider">
          <Slider {...settings}>
            <div>
              <img src={img1} alt="Program 1" />
            </div>
            <div>
              <img src={img2} alt="Program 2" />
            </div>

            {/* <div>
              <img src={img3} alt="Program 3" />
            </div>
            <div>
              <img src={img4} alt="Program 4" />
            </div> */}
            
          </Slider>
        </div>

        {/* === Content Section === */}
        <section className="march-content">
          <div className="march">
            <h1 className="program-title">
              MARCH BREAK - Toronto, Ontario (March 2025)
            </h1>
            <p>
            Fun & Creative Activities for Boys & Girls Kids Dream Haven
                Foundation hosted an exciting March Break Camp designed to keep
                children ages 6 and up engaged, inspired, and active during
                their school break. The week was packed with fun filled, hands
                on activities that encouraged creativity, learning, and
                friendship. Campers enjoyed: -Breakfast & lunch provided daily
                -Free customized camp T-shirts -Arts & crafts projects -A one
                day field trip -Cooking classes -DIY projects -STEM activities
                and much more! Our program was built to offer a safe, inclusive,
                and supportive environment where kids could explore their
                talents, try new skills, and make lasting memories. Whether they
                were painting, cooking, building, or exploring on our field
                trip, every child left with a smile and a sense of
                accomplishment. At Kids Dream Haven Foundation , we believe
                school breaks are an opportunity for growth, exploration, and
                joy, and our March Break Camp brought that to life in the best
                way possible.
            </p>
          </div>
        </section>
      </div>

      <FooterCA />
      <BottomFooter />
    </>
  );
};


export default MarchBreak
