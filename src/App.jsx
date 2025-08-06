import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Programs from './Pages/Programs';
import Media from './Pages/Media';
import DomesticProgram from './Pages/DomesticProgram';
import PastProgram from './Pages/PastProgram';
import TopHeader from './Components/TopHeader/TopHeader';
import FutureProgram from './Pages/FutureProgram';
import HospitalSupport from './Pages/HospitalSupport';
import FeedingKids from './Pages/FeedingKids';
import SupportWidows from './Pages/SupportWidows'; 
import BecomeAVolunteer from './Pages/BecomeAVolunteer';
import DonateNow from './Pages/DonateNow';
import OtherPrograms from './Pages/OtherProgram';


const App = () => {
  return (
    <Router>
      {/* Group Topbar and Navbar */}
      <header>
        <TopHeader />

        {/* <Navbar /> */}

      </header>

      {/* Main content for routing */}
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="about" element={<About pageType="about"/>} />
            <Route path="programs" element={<Programs pageType="programs"/>} />
            <Route path="media" element={<Media pageType="media"/>} />


         
          {/* Detail Routes for each Program */}   
            <Route path="/programs/domestic" element={<DomesticProgram />} />
            <Route path="/programs/past" element={<PastProgram />} />
             <Route path="/programs/other" element={<OtherPrograms />} />
            <Route path="/programs/future" element={<FutureProgram />} />
            <Route path="/themovement/learn" element={<FutureProgram />} />
            <Route path="/movement/hospital-support" element={<HospitalSupport />} />
            <Route path="/movement/feeding-kids" element={<FeedingKids />} />
            <Route path="/movement/Support-widows" element={<SupportWidows />} />
            <Route path="/volunteer" element={<BecomeAVolunteer />} />
            <Route path="/donate" element={<DonateNow />} />

        </Routes>
      </main>
      {/* <BottomFooter /> */}
    </Router>
  );
};

export default App;
