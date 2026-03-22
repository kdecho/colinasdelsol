import React from 'react';
import './Hero.css';
import heroImage from '../assets/images/hero_sea_sunset.png';

function Hero() {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-subtitle">Batroun, Lebanon</p>
        <h1 className="hero-title">Experience Minimalist Luxury by the Mediterranean</h1>
        <p className="hero-description">
          Six identical, exclusive chalets designed for relaxation, happy vibes, and unforgettable sunsets.
        </p>
        <div className="hero-actions">
          <a href="#booking" className="btn-primary hero-btn">Book Your Stay</a>
          <a href="#chalets" className="btn-secondary hero-btn">Explore Chalets</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
