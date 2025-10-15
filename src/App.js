import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// eslint-disable-next-line no-unused-vars
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Service from './components/Service';
import Contact from './components/Contact';

import './App.css'; // Importing the CSS file for App component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
