import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin, user }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.local_foods_logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          HOME
        </Link>
        <Link
          to="/about-us"
          onClick={() => setMenu("about us")}
          className={menu === "about us" ? "active" : ""}
        >
          ABOUT US
        </Link>
        <Link
          to="/businesses"
          onClick={() => setMenu("businesses")}
          className={menu === "businesses" ? "active" : ""}
        >
          LOCAL BUSINESSES
        </Link>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          CONTACT US
        </a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {user ? (
          <button onClick={() => navigate("/account")}>{user.name}</button>
        ) : (
          <button onClick={() => setShowLogin(true)}>SIGN IN</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;