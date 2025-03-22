import React from 'react';
import './About.scss';
import ProjectsSlider from '../ProjectsSlider';

const About: React.FC = () => {
  
  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__title">About HackDartmouth X</h2>
        
        <div className="about__description">
          <p>
            HackDartmouth is Dartmouth's premier annual hackathon, bringing innovators together right
            here on campus. This year marks our <span className="highlight">10th anniversary</span>, and we're excited to celebrate a
            decade of creativity, collaboration, and cutting-edge technology. Over 24 hours, teams will
            design and build groundbreaking projects while enjoying hands-on workshops, fun social
            activities, and an inspiring community of hackers.
          </p>
        </div>
        
        <h3 className="about__subtitle">What can you make at HackDartmouth?</h3>
        
        <p className="about__subtext">Take a look at some of last year's projects:</p>
      
        <ProjectsSlider />

        <div className="about__more-link">
          <p>
            Want to see more? Visit the DevPost <a href="https://hackdartmouth-ix.devpost.com/project-gallery" target="_blank" rel="noopener noreferrer" className="link">here</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;