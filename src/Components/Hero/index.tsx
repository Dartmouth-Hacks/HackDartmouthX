import React from 'react';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <section className="home">

      <div className="home__content">
        <h1 className="home__title">HackDartmouth X</h1>
        <p className="home__date">April 26 – 27, 2025 | Dartmouth College</p>
        
        <div className="home__buttons">
          <a href="https://dartgo.org/hackdartmouthx-schedule" target="_blank" rel="noopener noreferrer" className="home__button home__button--register">
            Event Schedule
          </a>
          <a 
            href="https://hackdartmouth-x.devpost.com/?_gl=1*c75uzr*_gcl_au*MjEwODY0OTI5OS4xNzQwNDQzNjEx*_ga*MjA0MjQ5MTExMS4xNzQwNDQzNjEy*_ga_0YHJK3Y10M*MTc0MjQzODM2OC4zLjEuMTc0MjQzODQ1OC4wLjAuMA"
            target="_blank" 
            rel="noopener noreferrer"
            className="home__button home__button--devpost">
            Devpost
          </a>
      </div>
      </div>
      <div className='home_right_content'>
        <img src="/globe.png" alt="HackDartmouth X" className="home__image" />
      </div>
    </section>
  );
};

export default Hero;