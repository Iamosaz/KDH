import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import ProgramHero from '../Components/ProgramHero/ProgramHero';
import ProgramSection from '../Components/ProgramSection/ProgramSection';
import TheMovement from '../Components/TheMovement/TheMovement';
import FooterCA from '../Components/FooterCA/FooterCA';
import BottomFooter from '../Components/BottomFooter/BottomFooter';


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
      {/* <TheMovement /> */}
      <ProgramSection />
      <FooterCA />
      <BottomFooter />
    </div>
  );
};

export default Programs;
