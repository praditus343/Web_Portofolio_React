// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Footer from './components/Footer';
// Import other pages here if needed
// import Home from './pages/Home';
// import Projects from './pages/Projects';
// import About from './pages/About';
// import Contact from './pages/Contact';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/Projects" element={<Projects />} /> */}
      {/* <Route path="/About" element={<About />} /> */}
      {/* <Route path="/Contact" element={<Contact />} /> */}
      <Route path="/Profile" element={<Profile />} />
    </Routes>
    <Profile/>
    <Footer />
  </Router>
);

export default App;
