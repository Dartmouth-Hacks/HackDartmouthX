import ProjectCard, { ProjectMetadata } from '../ProjectCard';
import React, { useState } from 'react';
import Slider from "react-slick";
import "./ProjectsSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  {
    id: 4,
    name: 'TimeFrame',
    url: 'https://devpost.com/software/timeframe?_gl=1*1e64pz4*_gcl_au*NjY3MjI4MTQwLjE3NDE4ODc1NTA.*_ga*MTA3ODA3OTcyNS4xNzQxODg3NTUy*_ga_0YHJK3Y10M*MTc0MjM0NzkzMy41LjEuMTc0MjM0Nzk4OC4wLjAuMA..', 
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/858/543/datas/medium.png',
  },
];

const ProjectsSlider: React.FC = () => {

  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    setActiveSlide(newIndex);
  };

  const sliderSettings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
    beforeChange: handleBeforeChange,
    initialSlide: 0,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true
        }
      }
    ]
  }
  
  return (
    <div className="slider-container" style={{padding: '20px 0'}}>
      <Slider {...sliderSettings}>
        {projects.map((project, index) => (
          <div key={project.id}>
            <ProjectCard 
              metadata={project} 
              active={index === activeSlide}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
};

export default ProjectsSlider;

