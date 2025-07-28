import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import AboutHero from '../Components/AboutHero/AboutHero';
import WhoWeAreSection from '../Components/WhoWeAreSection/WhoWeAreSection';
import JoinMission from '../Components/JoinMission/JoinMission';
import FooterCTA from '../Components/FooterCTA/FooterCTA';
import FooterBottom from '../Components/FooterBottom/FooterBottom';





const About = () => {
  useEffect(() => {
    document.body.classList.add("about-page-body");
    return () => {
      document.body.classList.remove("about-page-body");  // i used this to just my navbar.jsx in about pagestructure and styling //
    };
  }, []);

  return (
    <div className="about-page">
      <Navbar />
      <AboutHero />
      <WhoWeAreSection />
      <JoinMission />
      <FooterCTA />
      <FooterBottom />
    </div>
  );
};

export default About;
