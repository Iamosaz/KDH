
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './Style/FutureProgram.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FooterCA from '../Components/FooterCA/FooterCA'
import BottomFooter from '../Components/BottomFooter/BottomFooter'
import image1 from '../Components/Assets/FuturePic.jpeg'
import image2 from '../Components/Assets/serving.jpeg'
import image3 from '../Components/Assets/FutureSt.jpeg'
import image4 from '../Components/Assets/FutureStk.jpeg'
import Navbar from '../Components/Navbar/Navbar';

const FutureProgram = () => {

     useEffect(() => {
       document.body.classList.add("futureprogram-page-body");
       return () => {
         document.body.classList.remove("futureprogram-page-body");
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
                 <div>
                 <img src={image4} alt="Program 3" />
               </div>
             </Slider>
           </div>
   
           {/* === Content Section === */}
           <section className="future-content">
             <div className="future">
               <h1 className="program-title">Future Strikers (FS)</h1>
                <p>Future Strikers – Summer Camp 2025 ⚽ This past summer, Kids
                Dream Haven brought the energy, excitement, and inspiration to
                life with our "Future Strikers" Summer Camp and what an
                unforgettable experience it was! From thrilling sports matches
                and team games to creative arts, confidence-building workshops,
                and daily bursts of motivation, the camp was a hub of laughter,
                learning, and new friendships. Children aged 6 and above stepped
                into a world where fitness met fun, where creativity had no
                limits, and where every child was celebrated as a leader and a
                champion in the making. It wasn’t just a summer camp, it was a
                journey that left kids more confident, skilled, and inspired
                than ever. Future Strikers 2025 proved that tomorrow’s stars are
                already shining bright today.</p>
             </div>
           </section>
          
         </div>
   
         <FooterCA />
         <BottomFooter />
       </>
  );
};

export default FutureProgram
