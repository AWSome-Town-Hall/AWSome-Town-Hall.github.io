import React from "react";

// Styles
import "./styles.scss";

const HeroSection = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-content">
        <h1 className="hero-heading">AWSome TownHall Community</h1>
        <p className="hero-description">
          Explore over 1,000 chapters across 140 countries and meet like-minded
          developers from all levels and backgrounds.
        </p>
        <div className="hero-btns">
          <a href="#courses">
            <button className="hero-btn solid">Checkout the courses</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
