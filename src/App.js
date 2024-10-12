import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/header';
import './App.css';
import Hero from './components/hero';
import About from './components/About';

import SlideImage from './components/Cards';
import CollageSection from './components/collage';
import ContactSection from './components/contact';

const App = () => (
  <div>
    <Navbar />
    <Header/>
    <Hero/>
    <About/>
    <SlideImage/>
    <CollageSection/>
    <ContactSection/>
    <footer className="footer">
      <p>&copy; 2024 Web Design Studio. All rights reserved.</p>
    </footer> 
  </div>
);

export default App;
