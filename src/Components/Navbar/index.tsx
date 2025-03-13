import React from 'react';
import './Navbar.scss';
import hackDartmouthLogo from '~/assets/hackDartmouthLogo.svg'
import MLHLogo from '~/assets/MLHLogo.svg'


const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
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
    </nav>
  );
};

export default Navbar;