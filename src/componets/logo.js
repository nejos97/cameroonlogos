import React from "react";
import PropTypes from 'prop-types';

import "./../styles/logo.scss";

const Logo = (props) => {
  return (
    <div className="logo">
      <div className="logo-image">
        <img src="logo-1.svg" alt="logo" />
        <div className="logo-image__download">
          <a href={props.url}>Download</a>
        </div>
      </div>
      <div className="logo-infos">
        <a href={props.url}>Cmr Logo</a>
        <p>Technology</p>
      </div>
    </div>
  );
};

Logo.propTypes = {
  url: PropTypes.string
};

Logo.defaultProps = {
  url: 'https://cameroonlogos.com'
};

export default Logo;
