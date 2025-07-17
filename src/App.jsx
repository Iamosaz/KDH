import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Topbar from "./Components/Topbar/Topbar";
import FooterCTA from './components/FooterCTA/FooterCTA';
import FooterBottom from './components/FooterBottom/FooterBottom';

const App = () => {
  return (
    <Router>
      {/* Group Topbar and Navbar */}
      <header>
        <Topbar />
        {/* <Navbar /> */}

      </header>

      {/* Main content for routing */}
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="about" element={<About pageType="about"/>} />
        </Routes>
      </main>
      <FooterCTA />
      <FooterBottom />
      
    </Router>
  );
};

export default App;
