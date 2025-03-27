import React, { useState } from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const [thankYouMessage, setThankYouMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setThankYouMessage("Thank you for your message!");
    setTimeout(() => setThankYouMessage(""), 3000);
  };

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.local_foods_logo} alt="" />
          <p>
            Local Food Businesses. <br />Explore the range of businesses in your area, providing products for you to view and buy.
          </p>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <Link to="/">Home</Link>
            <br />
            <Link to="/about-us">About Us</Link>
            <br />
            <Link to="/businesses">Local Businesses</Link>
            <br />
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>CONTACT US</h2>
          <form onSubmit={handleSubmit} className="cart-promocode-input">
            <input type="text" placeholder="Message..." required />
            <button type="submit">Submit</button>
          </form>
          {thankYouMessage && <p className="thank-you-message">{thankYouMessage}</p>}
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 @ Joe Martindale - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;