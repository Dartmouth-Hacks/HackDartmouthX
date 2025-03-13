import React from 'react';
import './About.scss';
import ProjectCard, { ProjectMetadata } from '../ProjectCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const About: React.FC = () => {
  

  const projects: ProjectMetadata[] = [
    {
      id: 1,
      name: 'Tree App',
      url: 'https://devpost.com/software/socap-qbnmed?_gl=1*1vhpmtl*_gcl_au*NjY3MjI4MTQwLjE3NDE4ODc1NTA.*_ga*MTA3ODA3OTcyNS4xNzQxODg3NTUy*_ga_0YHJK3Y10M*MTc0MTg4NzU1MS4xLjEuMTc0MTg4NzYzMS4wLjAuMA..',
      image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/858/213/datas/medium.png',
    },
    {
      id: 2,
      name: 'What The Yap',
      url: 'https://devpost.com/software/yabber?_gl=1*1vhpmtl*_gcl_au*NjY3MjI4MTQwLjE3NDE4ODc1NTA.*_ga*MTA3ODA3OTcyNS4xNzQxODg3NTUy*_ga_0YHJK3Y10M*MTc0MTg4NzU1MS4xLjEuMTc0MTg4NzYzMS4wLjAuMA..', 
      image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/855/385/datas/medium.png',
    },
    {
      id: 3,
      name: 'Cosmo',
      url: 'https://devpost.com/software/cosmo-kittens?_gl=1*nbsx94*_gcl_au*NjY3MjI4MTQwLjE3NDE4ODc1NTA.*_ga*MTA3ODA3OTcyNS4xNzQxODg3NTUy*_ga_0YHJK3Y10M*MTc0MTg4NzU1MS4xLjEuMTc0MTg4NzYzMS4wLjAuMA..', 
      image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/855/930/datas/medium.png',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomLeftArrow = ({ onClick }: any) => (
    <button 
      className="carousel-arrow carousel-arrow-left" 
      onClick={onClick}
      aria-label="Previous project"
    >
      &lt;
    </button>
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomRightArrow = ({ onClick }: any) => (
    <button 
      className="carousel-arrow carousel-arrow-right" 
      onClick={onClick}
      aria-label="Next project"
    >
      &gt;
    </button>
  );

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
        
        <div className="about__project-showcase">
          {/* <Carousel
            responsive={responsive}
            infinite={true}
            centerMode={true}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            itemClass="carousel-item"
            containerClass="carousel-container"
            keyBoardControl={true}
            removeArrowOnDeviceType={["mobile"]}
            dotListClass="carousel-dots"
            autoPlay={false}
            autoPlaySpeed={3000}
            partialVisible={false}
            focusOnSelect={true}
          > */}
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            infinite={true}
            centerMode={true}
            itemClass="carousel-item"
          >
            {projects.map((project) => (
              <div key={project.id} className="carousel-project-container">
                <ProjectCard metadata={project} />
              </div>
            ))}
          </Carousel>
        </div>
        
        <div className="about__more-link">
          <p>
            Want to see more? Visit the DevPost <a href="https://hackdartmouth-ix.devpost.com/" className="link">here</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;