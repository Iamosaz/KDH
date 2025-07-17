import React from 'react';
import MissionSection from '../components/MissionSection/MissionSection';
import JoinMovement from '../components/JoinMovement/JoinMovement';
import JoinMission from '../components/JoinMission/JoinMission';
import HeroSlider from '../Components/HeroSlider/HeroSlider';





const Home = () => {
  return (
    <div className="home">
      {/* <Hero_Slider/> */}
     <HeroSlider />
     <MissionSection />
     <JoinMission />
     <JoinMovement />
     {/* <FooterCTA /> */}
     {/* <FooterBottom /> */}
    </div>
  );
};

export default Home;