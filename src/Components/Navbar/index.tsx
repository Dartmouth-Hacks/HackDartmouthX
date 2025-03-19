import React, { useState } from 'react';
import './Navbar.scss';
import hackDartmouthLogo from '~/assets/hackDartmouthLogo.svg'
import MLHLogo from '~/assets/MLHLogo.svg'


const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar__container">

        <button className="navbar__hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <div></div>
          <div></div>
          <div></div>
        </button>

        <div className="navbar__left">
          <div className="logo">
            <img src={hackDartmouthLogo} alt="HackDartmouth" />
            <span>HackDartmouth</span>
          </div>
        </div>
        
        <div className="navbar__right">
          <a href="#about" className="link">About</a>
          <a href="#apply" className="link">Apply</a>
          <a href="#faq" className="link">FAQ</a>
          <a href="#contact" className="link">Contact</a>
          <div className="navbar__logo-right">
            <div className="mlh-badge">
              <img src={MLHLogo} alt="MLH Official 2025 Season" />
            </div>
          </div>
        </div>
      </div>

      <div className={`navbar__overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>
      
      <div className={`navbar__mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#about" className="link" onClick={closeMenu}>About</a>
        <a href="#apply" className="link" onClick={closeMenu}>Apply</a>
        <a href="#faq" className="link" onClick={closeMenu}>FAQ</a>
        <a href="#contact" className="link" onClick={closeMenu}>Contact</a>
        <div className="navbar__logo-right">
          <div className="mlh-badge">
            <img src={MLHLogo} alt="MLH Official 2025 Season" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;