import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#" className="logo">Colinas Del Sol</a>
        <nav className="nav-links">
          <a href="#chalets">The Chalets</a>
          <a href="#amenities">Amenities</a>
          <a href="#batroun">Batroun Guide</a>
          <a href="#booking" className="btn-primary">Book Now</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
