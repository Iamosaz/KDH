import React from 'react';
import HomeSlider from '../Components/HomeSlider/HomeSlider';
import FooterBottom from '../Components/FooterBottom/FooterBottom';
import FooterCTA from '../Components/FooterCTA/FooterCTA';
import JoinMission from '../Components/JoinMission/JoinMission'
import MissionInfo from '../Components/MissionInfo/MissionInfo'







const Home = () => {
  return (
    <div className="home">
     <HomeSlider />
     <MissionInfo />
     <JoinMission />
     <FooterCTA />
     <FooterBottom />
    </div>
  );
};

export default Home;