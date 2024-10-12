import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>MyLogo</h1>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      {isMenuOpen && (
        <nav className="sidebar">
          <ul className="menu">
            <li>Home Page</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
