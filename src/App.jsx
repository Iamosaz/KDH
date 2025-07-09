import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './Components/Topbar/Topbar';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';

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
        </Routes>
      </main>
    </Router>
  );
};

export default App;
