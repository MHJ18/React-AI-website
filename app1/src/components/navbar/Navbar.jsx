import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
function Navbar() {
  return (
    <div className="container">
      <div className="gpt__navbar-flex ">
        <div className="gpt__navbar-logo">
          <img src={logo} alt="" />
        </div>
        <div className="gpt__navbar-links font-style">
          <ul className="links-flex">
            <li className="navbar-links">
              <a href="/">Home</a>
            </li>
            <li className="navbar-links">
              <a href="/">What is GPT?</a>
            </li>
            <li className="navbar-links">
              <a href="/">Open AI</a>
            </li>
            <li className="navbar-links">
              <a href="/">Case Studies</a>
            </li>
            <li className="navbar-links">
              <a href="/">Library</a>
            </li>
          </ul>
        </div>
        <div className="gpt__navbar-buttons">
          <button type="button">Sign in</button>
          <button type="button">Sign up</button>
        </div>
      </div>
      {/* <RiMenu2Line className="icon-nav-menu" /> */}
    </div>
  );
}

export default Navbar;
