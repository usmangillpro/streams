import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="ui google plus button">
        <i className="heart icon"></i>
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <div className="menu item"></div>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
