import React from 'react';
import './Tracks.scss'
import PostCard from '../PostCard';

const trackDetails = [
  {
    title: "EDUCATION",
    description: "Transform traditional learning paradigms by integrating technology to create more engaging, accessible, and personalized educational experiences.",
    topics: [
      "EdTech",
      "Research",
      "K-12 Education",
      "Social impact",
      "Continuing Education",
      "Gamification"
    ]
  },
  {
    title: "GAMING",
    description: "Redefine interactive entertainment with innovative game mechanics and immersive storytelling that blend creativity with cutting-edge technology.",
    topics: [
      "Game Design",
      "E-Sports",
      "Entertainment",
      "Education",
      "Skills Training",
      "Accessibility in Gaming"
    ]
  },
  {
    title: "HEALTHCARE",
    description: "Enhance patient care and streamline medical processes through digital solutions that improve diagnostics, telemedicine, and data-driven healthcare management.",
    topics: [
      "Mental Health",
      "Reproductive Health",
      "Telemedicine",
      "Holistic Care",
      "Nutrition",
      "General Healthcare"
    ]
  },
  {
    title: "AR/VR",
    description: "Create immersive augmented and virtual reality experiences to revolutionize training, entertainment, and everyday interactions.",
    topics: [
      "Immersive Learning",
      "Virtual Training",
      "Accessibility and Inclusion",
      "Design Visualization",
      "Shopping Experiences",
      "Sports and Fitness"
    ]
  },
  {
    title: "BLOCKCHAIN",
    description: "Empower financial innovation by developing secure, intuitive, and data-centric solutions that simplify transactions, enhance investment strategies, and drive financial inclusion.",
    topics: [
      "Governance",
      "Social Impact",
      "Interoperability",
      "Security",
      "Non-Fungible Tokens",
      "Cryptocurrency"
    ]
  }
];

const Tracks: React.FC = () => {
  return (
    <section className="tracks" id="tracks">
      <div className="tracks__container">
        <h2 className="tracks__title">Tracks</h2>
        <div className="post-card-grid">
          {trackDetails.map((track, index) => (
            <PostCard
              key={index}
              title={track.title}
              description={track.description}
              topics={track.topics}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Tracks;