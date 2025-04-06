import React from "react";
import Slider from "react-slick";
import "./Sponsors.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sponsorPlaceholders = [1, 2, 3, 4, 5, 6];

const Sponsors: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <section className="sponsors" id="sponsors">
      <h1 className="sponsors-title">Sponsors</h1>
      <Slider {...settings}>
        {sponsorPlaceholders.map((placeholder) => (
          <div key={placeholder} className="sponsor-slide">
            <div className="sponsor-image-placeholder"></div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Sponsors;
