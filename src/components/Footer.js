import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faLink } from "@fortawesome/free-solid-svg-icons";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sant Vicenç de Montalt</h3>
          <p>The heart of Maresme.</p>
        </div>

        <div className="footer-section">
          <h3>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Information
          </h3>
          <ul>
            <li>Region: Maresme</li>
            <li>Altitude: 143m</li>
            <li>Population: ~6,800 inhabitants</li>
            <li>Climate: Mediterranean</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>
            <FontAwesomeIcon icon={faLink} /> Links
          </h3>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#activities">Activities</a>
            </li>
            <li>
              <a href="#tower">Monument</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>www.svmontalt.cat</li>
            <li>turisme@svmontalt.cat</li>
            <li>+34 93 791 05 11</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Sant Vicenç de Montalt Tourism</p>
      </div>
    </footer>
  );
}

export default Footer;
