import React from "react";
import "./../../styles/navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <a href="https://cameroonlogos.com/" className="navbar__logo">
        <img className="navbar-logo" src="logo-1.svg" alt="CameroonLogos" />
      </a>
      <a
        className="navbar-link"
        href="https://github.com/nejos97/cameroonlogos"
        target="_blank"
        rel="noreferrer"
      >
        Contribute on Github
      </a>
    </div>
  );
};

export default NavBar;
