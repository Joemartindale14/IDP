import React, { useState } from "react";
import axios from "../../axiosConfig";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const LoginPopup = ({ setShowLogin, setUser }) => {
  const [currState, setCurrState] = useState("Login");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = currState === "Login" ? "/auth/login" : "/auth/register";
    try {
      const { data } = await axios.post(url, formData);
      console.log(data);
      setSuccessMessage(currState === "Login" ? "Logged in successfully!" : "Registered successfully!");
      setErrorMessage("");
      setUser(data.result);
      setTimeout(() => {
        setShowLogin(false);
        if (currState === "Login") {
          navigate("/cart");
        }
      }, 2000);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response?.data?.message || "You have ran into an error.");
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Log In"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By ticking this box, I agree to the terms of use and Local Foods privacy
            policy.
          </p>
        </div>
        {currState === "Login" ? (
          <p>
            Not an existing user?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            You are already a user?{" "}
            <span onClick={() => setCurrState("Login")}>Login Here</span>
          </p>
        )}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LoginPopup;