import React from 'react';
import './About.css';
import interiorImg from '../assets/images/chalet_interior_lebanese.png';
import poolImg from '../assets/images/amenities_pool.png';

const amenitiesList = [
  { name: 'Sea View', icon: '🌊', description: 'Uninterrupted Mediterranean vistas.' },
  { name: 'Private Pool', icon: '🏊‍♂️', description: 'Your own luxury plunge pool.' },
  { name: 'Wifi', icon: '📶', description: 'High-speed internet access.' },
  { name: 'BBQ Area', icon: '🥩', description: 'Perfect for sunset grilling.' },
  { name: 'Sunset Viewing', icon: '🌅', description: 'The best sunsets in Batroun.' }
];

function About() {
  return (
    <section className="about-section" id="chalets">
      <div className="about-container">
        
        {/* Intro Grid */}
        <div className="about-grid">
          <div className="about-text">
            <h2>The Chalets</h2>
            <p className="subtitle">Six Identical Minimalist Sanctuaries</p>
            <p>
              Colinas Del Sol offers six exclusively identical chalets, each meticulously designed to provide the ultimate
              Mediterranean getaway. Embrace the happy vibes and deep relaxation of Batroun. 
            </p>
            <p>
              With authentic Lebanese warmth and a highly minimalist luxury aesthetic, every detail—from the natural stone
              accents to the expansive windows—is crafted to harmonize with the breathtaking coastal surroundings.
            </p>
          </div>
          <div className="about-image">
            <img src={interiorImg} alt="Chalet Interior" loading="lazy" />
          </div>
        </div>

        {/* Amenities Section */}
        <div className="amenities-wrapper" id="amenities">
          <div className="amenities-image">
             <img src={poolImg} alt="Private Plunge Pool" loading="lazy" />
          </div>
          <div className="amenities-content">
            <h2>Amenities</h2>
            <p className="subtitle">Everything You Need</p>
            <div className="amenities-grid">
              {amenitiesList.map((item, index) => (
                <div key={index} className="amenity-card">
                  <div className="amenity-icon">{item.icon}</div>
                  <div className="amenity-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
