import React, { useState } from "react";
import logo from "../../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarState, setNavbarState] = useState({ isOpen: false });

  const handleToggle = () => {
    setNavbarState({ isOpen: !navbarState.isOpen });
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon"></FaAlignRight>
          </button>
        </div>
        <ul className={navbarState.isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
