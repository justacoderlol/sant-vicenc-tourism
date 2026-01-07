import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import heroImage from "../assets/images/gallery/general-view.jpg";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-image-container">
        <img
          src={heroImage}
          alt="Sant Vicenç de Montalt coastline"
          className="hero-image"
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">Discover</div>
        <h1>
          Sant Vicenç
          <br />
          de Montalt
        </h1>
        <p className="subtitle">
          Where the mountains meet the Mediterranean sea
        </p>
        <p className="description">
          Discover a charming coastal village with golden beaches, historic
          towers, and breathtaking mountain views.
        </p>
        <div className="hero-actions">
          <a href="#activities" className="action-btn primary">
            Recommended Plans
          </a>
          <a href="#tower" className="action-btn secondary">
            3D Watchtower
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to discover</span>
        <div className="scroll-arrow">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
