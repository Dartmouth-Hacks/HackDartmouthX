import React, { useState } from "react";
import "./PostCard.scss";

interface PostCardProps {
  title: string;
  description: string;
  topics: string[];
}

const PostCard: React.FC<PostCardProps> = ({ title, description, topics }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`post-card-container ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="post-card">
        <div className="post-card-front">
          <div className="post-card-content">
            <div className="post-card-spacer"></div>
            <div className="post-card-title-container">
              <h2 className="post-card-title">{title}</h2>
            </div>
            <div className="learn-more">
              <span>Learn More</span>
              <img
                src="/curvedarrow.svg"
                alt="Curved Arrow"
                style={{
                  fill: "#000",
                  width: "0.93756rem",
                  height: "1.21881rem",
                  marginLeft: "5px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="post-card-back">
          <div className="post-card-content">
            <div className="post-card-content-container">
              <p className="post-card-description">{description}</p>
              <ul className="post-card-topics">
                {topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
