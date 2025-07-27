import React from 'react';
import MissionSection from '../components/MissionSection/MissionSection';
import JoinMovement from '../components/JoinMovement/JoinMovement';
import JoinMission from '../components/JoinMission/JoinMission';
import HomeSlider from '../Components/HomeSlider/HomeSlider';
import FooterBottom from '../components/FooterBottom/FooterBottom';
import FooterCTA from '../components/FooterCTA/FooterCTA';







const Home = () => {
  return (
    <div className="home">
     <HomeSlider />
     <MissionSection />
     <JoinMission />
     <JoinMovement />
     <FooterCTA />
     <FooterBottom />
    </div>
  );
};

export default Home;