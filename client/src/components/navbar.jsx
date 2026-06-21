import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">MyProject</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;