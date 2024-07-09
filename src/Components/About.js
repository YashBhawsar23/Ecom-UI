import React from "react";
import "./Styles/AboutSection.css";

const About = () => {
  return (
    <div className="about-section">
      <h2>About Us</h2>
      <div className="about-content">
        <div className="about-image">
          <img src="images/Info/Hero.jpg" alt="About Us" />
        </div>
        <div className="about-text">
          <b>
            <p className="text1">
              Swaggin, founded in 2024 and proudly based in India, is more than
              just a clothing brand—it's a vision, a passion, and a commitment
              to redefining fast fashion.
            </p>
          </b>
          <p className="text2">
            Swaggin was born out of a dream to create a global brand with a
            distinctly Indian identity. Coming from a business background, our
            founder recognized the growing demand for fast fashion and saw an
            opportunity to fill a niche in the market. With a deep love for
            fashion and a desire to showcase the best of Indian craftsmanship,
            Swaggin was launched with the goal of offering trendy, high-quality
            apparel that proudly bears the “Made in India” label.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
