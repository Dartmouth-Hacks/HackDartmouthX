import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <section className="contact" id="contact">
        <div className="footer-container">
          <div className="footer-logo-section">
            <img
              src="/hackDartmouthFooterLogo.png"
              alt="HackDartmouth Logo"
              className="main-logo"
            />
            <div className="social-icons">
              <a
                href="https://instagram.com/hackdartmouth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/instagramLogo.png"
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
              <a
                href="https://linkedin.com/company/hackdartmouth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedinLogo.png"
                  alt="LinkedIn"
                  className="social-icon"
                />
              </a>
            </div>
          </div>

          <div className="footer-info-section">
            <h2 className="footer-heading">Contact Us</h2>

            <div className="footer-info-block">
              <h3 className="footer-subheading">Location</h3>
              <p className="footer-text">15 Thayer Dr, Hanover, NH 03755</p>
            </div>

            <div className="footer-info-block">
              <h3 className="footer-subheading">Questions</h3>
              <a
                href="mailto:dartmouthhackathon@gmail.com"
                className="footer-link"
              >
                dartmouthhackathon@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
