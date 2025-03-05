import React, { useState } from "react";
import axios from "../../axiosConfig"; // Update the import statement
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Add this line

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
      setErrorMessage(""); // Clear any previous error messages
      setTimeout(() => {
        setShowLogin(false);
      }, 2000); // Close the popup after 2 seconds
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response?.data?.message || "Something went wrong"); // Display error message
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
            By ticking this box, I agree to the terms of use and company privacy
            policy.
          </p>
        </div>
        {currState === "Login" ? (
          <p>
            Create an account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login Here</span>
          </p>
        )}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Add this line */}
      </form>
    </div>
  );
};

export default LoginPopup;