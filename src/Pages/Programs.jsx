import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import ProgramHero from '../Components/ProgramHero/ProgramHero';
import FooterCTA from '../components/FooterCTA/FooterCTA';
import FooterBottom from '../components/FooterBottom/FooterBottom';
import ProgramSection from '../Components/ProgramSection/ProgramSection';
import TheMovement from '../Components/TheMovement/TheMovement';


const Programs = () => {
  useEffect(() => {
    document.body.classList.add("program-page-body");
    return () => {
      document.body.classList.remove("program-page-body");  // i used this to just my navbar.jsx in program pagestructure and styling //
    };
  }, []);

  return (
    <div className="program-page">
      <Navbar />
      <ProgramHero />
      <TheMovement />
      <ProgramSection />
      <FooterCTA />
      <FooterBottom />
    </div>
  );
};

export default Programs;
