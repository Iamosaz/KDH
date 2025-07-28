import React from 'react';
import HomeSlider from '../Components/HomeSlider/HomeSlider';
import JoinMission from '../Components/JoinMission/JoinMission'
import MissionInfo from '../Components/MissionInfo/MissionInfo'
import BottomFooter from '../Components/BottomFooter/BottomFooter';
import FooterCA from '../Components/FooterCA/FooterCA';







const Home = () => {
  return (
    <div className="home">
     <HomeSlider />
     <MissionInfo />
     <JoinMission />
     <FooterCA />
     <BottomFooter />
    </div>
  );
};

export default Home;