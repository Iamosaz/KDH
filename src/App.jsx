import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Programs from './Pages/Programs';
import Media from './Pages/Media';
import DomesticProgram from './Pages/DomesticProgram';
import PastProgram from './Pages/PastProgram';
import TopHeader from './Components/TopHeader/TopHeader';

const App = () => {
  return (
    <Router>
      {/* Group Topbar and Navbar */}
      <header>
        <TopHeader />

      {/* <TopNav /> */}
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
        </Routes>
      </main>
      {/* <FooterCTA /> */}
      {/* <FooterBottom /> */}
      
    </Router>
  );
};

export default App;
