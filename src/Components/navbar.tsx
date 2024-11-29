import "./navbar.css";
import { useState } from "react";
import React from "react";
import {
  FaSearch,
  FaUserAlt,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

// Import icons from react-icons
// Removed useNavigate from react-router-dom

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Setting the natural state of the hamburger menu to be false

  const handleMenuToggle = () => {
    console.log(isMenuOpen);
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-left">
          {/* Hamburger menu */}
          <button className="menu-button" onClick={handleMenuToggle}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`off-screen-menu ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li>Toys</li>
              <li>Skincare</li>
              <li>Supplements</li>
            </ul>
          </div>

          {/* Navigation Links */}
          <ul className="navbar-links">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#journal">Journal</a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          {/* Search Bar */}
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="search-icon">
              <FaSearch />
            </button>
          </div>

          {/* User Icon */}
          <Link to="/login" className="icon-button">
            <FaUserAlt size={24} />
          </Link>

          {/* Mail Icon for Contact Page */}
          <Link to="/contact" className="icon-button">
            <IoMdMail size={24} />
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
