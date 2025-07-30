
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './Style/FutureProgram.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FooterCA from '../Components/FooterCA/FooterCA'
import BottomFooter from '../Components/BottomFooter/BottomFooter'
import image1 from '../Components/Assets/FutureSt.jpeg'
import image2 from '../Components/Assets/FutureSt.jpeg'
import image3 from '../Components/Assets/FutureSt.jpeg'
import Navbar from '../Components/Navbar/Navbar';

const FutureProgram = () => {

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
   
         <div className="future-wrapper">
           {/* === Image Slider === */}
           <div className="image-slider">
             <Slider {...settings}>
               <div>
                 <img src={image1} alt="Program 1" />
               </div>
               <div>
                 <img src={image2} alt="Program 2" />
               </div>
               <div>
                 <img src={image3} alt="Program 3" />
               </div>
             </Slider>
           </div>
   
           {/* === Content Section === */}
           <section className="future-content">
             <div className="future">
               <h1 className="program-title">Future Strikers (FS)</h1>
                <p>Future Strikers – Summer Camp 2025 ⚽
                Get ready for an unforgettable summer! Kids Dream Haven is thrilled to announce our upcoming "Future Strikers" Summer Camp a dynamic and engaging program designed to empower kids through fun, fitness, and creativity. This camp is more than just a way to spend the holidays—it's an opportunity for children to build confidence, develop new skills, make lasting friendships, and be part of something truly inspiring. Packed with exciting activities such as sports, team games, creative arts, confidence-building workshops, and daily inspiration, Future Strikers is open to all children ages 6 and above. We believe every child is a future leader and champion—and this camp is where they start their journey. Don’t miss out on this life-shaping experience coming this summer—let's shape tomorrow’s stars today!</p>
             </div>
           </section>
          
         </div>
   
         <FooterCA />
         <BottomFooter />
       </>
  );
};

export default FutureProgram
