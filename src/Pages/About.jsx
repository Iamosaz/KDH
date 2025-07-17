import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import AboutHero from '../components/AboutHero/AboutHero';
import WhoWeAreSection from '../components/WhoWeAreSection/WhoWeAreSection';
import FooterCTA from '../components/FooterCTA/FooterCTA';
import FooterBottom from '../components/FooterBottom/FooterBottom';
import JoinMission from '../components/JoinMission/JoinMission';


const About = () => {
  useEffect(() => {
    document.body.classList.add("about-page-body");
    return () => {
      document.body.classList.remove("about-page-body");  // i used this to just my navbar.jsx structure and styling //
    };
  }, []);

  return (
    <div className="about-page">
      <Navbar />
      <AboutHero />
      <WhoWeAreSection />
      <JoinMission />
      {/* <FooterCTA /> */}
      {/* <FooterBottom /> */}
    </div>
  );
};

export default About;
