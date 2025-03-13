import React from 'react';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <section className="home">
      <div className="home__content">
        <h1 className="home__title">HackDartmouth X</h1>
        <p className="home__date">April 26 – 27, 2025 | Dartmouth College</p>
        
        <div className="home__buttons">
          <a href="#register" className="home__button home__button--register">
            Register
          </a>
          <a href="#devpost" className="home__button home__button--devpost">
            Devpost
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;