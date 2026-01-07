import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";
import coatOfArms from "../assets/images/ui/coat-of-arms.svg";
import "../styles/Header.css";

function Header({ cartCount, toggleCart }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img
            src={coatOfArms}
            alt="Sant Vicenç Coat of Arms"
            className="logo-coat-of-arms"
          />
          <h1>Sant Vicenç de Montalt</h1>
        </div>
        <nav className="nav">
          <a href="#hero">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#activities">Activities</a>
          <a href="#tower">Monument</a>
        </nav>
        <button className="cart-button" onClick={toggleCart}>
          <FontAwesomeIcon icon={faSuitcaseRolling} /> My Trip
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
}

export default Header;
