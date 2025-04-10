import React from "react";
import Slider from "react-slick";
import "./Sponsors.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sponsorPlaceholders = [
  "/RunpodLogo.svg",
  "/ThayerLogo.png",
  "/NeuralinkLogo.svg",
  "/MavisLogo.png",
  "/RunpodLogo.svg",
  "/ThayerLogo.png",
  "/NeuralinkLogo.svg",
  "/MavisLogo.png",
];

const Sponsors: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [],
  };

  return (
    <section className="sponsors" id="sponsors">
      <h1 className="sponsors-title">Sponsors</h1>
      <Slider {...settings}>
        {sponsorPlaceholders.map((imgPath) => (
          <div key={imgPath} className="sponsor-slide">
            <div className="sponsor-image-container">
              <img
                className="sponsor-image"
                src={imgPath}
                alt="Sponsor Logo"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Sponsors;
