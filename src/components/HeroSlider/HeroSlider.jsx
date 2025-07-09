
import React, { useState , useEffect } from 'react'
import './HeroSlider.css';
import Navbar from '../Navbar/Navbar';
import slider1 from '../Assets/slider1.jpg';
import slider2 from '../Assets/slider2.jpg';
import slider3 from '../Assets/slider3.jpg';


// image + text content , Js file arrary method //
const slides = [
  {
    image: slider1,
    title: 'Love, Support and a Brighter Future',
    description: 'We are dedicated to improving the lives of children and impact thier lives Positively.',
  },

   {
    image: slider2,
    title: 'Serving With Love',
    description: 'we are dedicated to bring change to the lives of children and thier families.',
  },

   {
    image: slider3,
    title: 'Building A Stronger Future',
    description: 'Kids Dream Haven is committed to nurturing growth and creating lasting change for all children.',
  },
];


const HeroSlider = () => {
  // start with the first slide image (index 0) //
   const [currentIndex, setCurrentIndex] = useState(0);

  //  set up auto slide change images 
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Go to next slide
    }, 6000); // Change every 6 seconds

     return () => clearTimeout(timer); // Cleanup
  }, [currentIndex]); // Re-run every time currentIndex changes


  return (
    <section
      className="hero-slider"
      style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
    >
      {/* Make the navbar live inside the hero area  */}
      <Navbar /> 

      <div className="hero-overlay">
        <div className="hero-content">
          <h1>{slides[currentIndex].title}</h1>
          <p>{slides[currentIndex].description}</p>
          {/* <a href="/donate" className="hero-btn">Donate Now</a> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;