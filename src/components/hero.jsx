import React from 'react';
import hero1 from '../img/hero1.jpg'


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={hero1} alt="Hero" />
      </div>
      <div className="hero-text">
        
        <h1 className="hero-title">Welcome to Our Website</h1>
        <p className="hero-description">Discover amazing content and learn more about our services.</p>
        <button className="learn-more">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;
