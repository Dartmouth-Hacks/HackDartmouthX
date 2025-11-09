import React from "react";
import "./Banner.scss";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__text">
          <span className="banner__title">HackDartmouth XI Coming Spring 2026!</span>
          <span className="banner__subtitle">Get notifications when registration opens!
          </span>
        </div>
        <a
          href="https://forms.gle/mkjPvPfMgnWjCgTF8"
          target="_blank"
          rel="noopener noreferrer"
          className="banner__button"
        >
          Indicate Interest
        </a>
      </div>
    </div>
  );
};

export default Banner;



