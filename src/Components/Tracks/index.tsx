import React from 'react';
import './Tracks.scss'
import PostCard from '../PostCard';

const trackDetails = [
  {
    title: "EDUCATION",
    description: "Transform traditional learning paradigms by integrating technology to create more engaging, accessible, and personalized educational experiences.",
    topics: [
      "Virtual tutoring and mentoring platforms",
      "Gamified learning applications",
      "Interactive curriculum and content management systems"
    ]
  },
  {
    title: "GAMING",
    description: "Redefine interactive entertainment with innovative game mechanics and immersive storytelling that blend creativity with cutting-edge technology.",
    topics: [
      "Cross-platform multiplayer experiences",
      "AI-driven game character behaviors",
      "Procedurally generated worlds and levels",
    ]
  },
  {
    title: "HEALTHCARE",
    description: "Enhance patient care and streamline medical processes through digital solutions that improve diagnostics, telemedicine, and data-driven healthcare management.",
    topics: [
      "Telehealth and remote consultation tools",
      "AI-assisted diagnostics and predictive analytics",
      "Wearable devices for real-time health monitoring"
    ]
  },
  {
    title: "AR/VR",
    description: "Create immersive augmented and virtual reality experiences that blend digital and physical worlds to revolutionize training, entertainment, and everyday interactions.",
    topics: [
      "AR-guided interactive tours and navigation",
      "VR-based training simulations for various industries",
      "Mixed-reality collaboration and social interaction platforms",
    ]
  },
  {
    title: "FINTECH",
    description: "Empower financial innovation by developing secure, intuitive, and data-centric solutions that simplify transactions, enhance investment strategies, and drive financial inclusion.",
    topics: [
      "Peer-to-peer payment and budgeting apps",
      "Blockchain-based smart contract platforms",
      "AI-powered investment analysis and fraud detection tools",
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