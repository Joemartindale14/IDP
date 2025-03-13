import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>View and order products</h2>
        <p>
          Find Local Food Businessses located near you.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
