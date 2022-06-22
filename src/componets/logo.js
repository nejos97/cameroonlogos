import React from "react";
import "./../styles/logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo-image">
        <img src="logo-1.svg" alt="logo" />
        <div className="logo-image__download">
          <a href="#">Download</a>
        </div>
      </div>
      <div className="logo-infos">
        <a href="#">Cmr Logo</a>
        <p>Technology</p>
      </div>
    </div>
  );
};

export default Logo;
