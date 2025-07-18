import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import FooterCTA from './components/FooterCTA/FooterCTA';
import FooterBottom from './components/FooterBottom/FooterBottom';
import TopNavbar from './Components/TopNav/TopNav';
// import TopNav from './Components/TopNav/TopNav';

const App = () => {
  return (
    <Router>
      {/* Group Topbar and Navbar */}
      <header>
        <TopNavbar/>

      {/* <TopNav /> */}
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
