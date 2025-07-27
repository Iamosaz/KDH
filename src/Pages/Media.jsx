import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import MediaHero from '../Components/MediaHero/MediaHero';



const Media = () => {
  useEffect(() => {
    document.body.classList.add("media-page-body");
    return () => {
      document.body.classList.remove("media-page-body");  // i used this to just my navbar.jsx in media page structure and styling in my navbar.css//
    };
  }, []);

  return (
    <div className="media-page">
      <Navbar />
      <MediaHero />
    </div>
  );
};

export default Media;
