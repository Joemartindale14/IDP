import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Local Food Businesses!</h2>
        <p>
          Find Local Food Businessses located near you to order products and foods for collection.
        </p>
        <button onClick={() => navigate("/businesses")}>Browse</button>
      </div>
    </div>
  );
};

export default Header;
