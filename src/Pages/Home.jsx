import React from 'react';
import MissionSection from '../Components/MissionSection/MissionSection';
import HomeSlider from '../Components/HomeSlider/HomeSlider';
import FooterBottom from '../Components/FooterBottom/FooterBottom';
import FooterCTA from '../Components/FooterCTA/FooterCTA';
import JoinMission from '../Components/JoinMission/JoinMission'







const Home = () => {
  return (
    <div className="home">
     <HomeSlider />
     <MissionSection />
     <JoinMission />
     <FooterCTA />
     <FooterBottom />
    </div>
  );
};

export default Home;