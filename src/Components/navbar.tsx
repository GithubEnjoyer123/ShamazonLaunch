import "./navbar.css";
import React from "react";
// import { FaSearch, FaUserAlt, FaShoppingCart, FaBars } from "react-icons/fa"; // Import icons from react-icons

function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-left">
          {/* Hamburger menu */}
          <button className="menu-button">{/* <FaBars /> */}</button>

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
            <button className="search-icon">{/* <FaSearch /> */}</button>
          </div>

          {/* User Icon */}
          <button className="icon-button">{/* <FaUserAlt /> */}</button>

          {/* Cart Icon */}
          <button className="icon-button">{/* <FaShoppingCart /> */}</button>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
