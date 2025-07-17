import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import FooterBottom from './components/FooterBottom/FooterBottom';
import FooterCTA from './components/FooterCTA/FooterCTA';
import Topbar from './components/Topbar/Topbar';

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
