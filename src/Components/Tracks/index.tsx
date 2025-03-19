import React from 'react';
import './Tracks.scss'
import PostCard from '../PostCard';

const trackDetails = [
  {
    title: "EDUCATION",
    description: "Description of the track and any potential topics within that category that hackers can do",
    topics: [
      "Topic",
      "Topic",
      "Topic",
      "Topic",
      "Topic"
    ]
  },
  {
    title: "GAMING",
    description: "Description of the track and any potential topics within that category that hackers can do",
    topics: [
      "Topic",
      "Topic",
      "Topic",
      "Topic",
      "Topic"
    ]
  },
  {
    title: "HEALTHCARE",
    description: "Description of the track and any potential topics within that category that hackers can do",
    topics: [
      "Topic",
      "Topic",
      "Topic",
      "Topic",
      "Topic"
    ]
  },
  {
    title: "AR/VR",
    description: "Description of the track and any potential topics within that category that hackers can do",
    topics: [
      "Topic",
      "Topic",
      "Topic",
      "Topic",
      "Topic"
    ]
  },
  {
    title: "FINTECH",
    description: "Description of the track and any potential topics within that category that hackers can do",
    topics: [
      "Topic",
      "Topic",
      "Topic",
      "Topic",
      "Topic"
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