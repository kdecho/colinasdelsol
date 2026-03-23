import React from 'react';
import './Attractions.css';
import batrounImg from '../assets/images/batroun_attraction.png';

const attractions = [
  { name: 'Phoenician Sea Wall', desc: 'An ancient natural structure protecting the city, a perfect walking spot at sunset.' },
  { name: 'Old Souk', desc: 'Cobblestone streets, local artisan shops, and vibrant Lebanese culture.' },
  { name: 'Saint Stephen Cathedral', desc: 'Majestic architecture overlooking the fisherman\'s harbor.' },
  { name: 'Famous Lemonade', desc: 'Taste the authentically refreshing Batroun lemonade, a local tradition.' },
  { name: 'Pristine Beaches', desc: 'Crystal clear waters and iconic beach cubs just minutes away.' },
];

function Attractions() {
  return (
    <section className="attractions-section" id="batroun">
      <div className="attractions-container">
        
        <div className="attractions-header">
          <h2>Discover Batroun</h2>
          <p className="subtitle">Right At Your Doorstep</p>
        </div>

        <div className="attractions-content">
          <div className="attractions-image">
            <img src={batrounImg} alt="The Phoenician Sea Wall in Batroun" loading="lazy" />
          </div>

          <div className="attractions-list-wrapper">
            <ul className="attractions-list">
              {attractions.map((item, index) => (
                <li key={index} className="attraction-item">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Attractions;
