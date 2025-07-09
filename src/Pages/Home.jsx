import React from 'react';
import HeroSlider from '../Components/HeroSlider/HeroSlider';
import MissionSection from '../components/MissionSection/MissionSection';
import JoinMovement from '../components/JoinMovement/JoinMovement';
import JoinMission from '../components/JoinMission/JoinMission';
import FooterCTA from '../components/FooterCTA/FooterCTA';
import FooterBottom from '../components/FooterBottom/FooterBottom';

const Home = () => {
  return (
    <div className="home">
     <HeroSlider />
     <MissionSection />
     <JoinMission />
     <JoinMovement />
     <FooterCTA />
     <FooterBottom />
    </div>
  );
};

export default Home;