import React, { useEffect, useState } from "react";
import axios from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
import "./AccountPage.css";

const AccountPage = ({ user, setUser }) => {
  const [userData, setUserData] = useState(null);
  const [selectedSection, setSelectedSection] = useState("details");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/auth/user/${user._id}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user]);

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  if (!userData) {
    return <div>Please wait a short moment.</div>;
  }

  return (
    <div className="account-page">
      <div className="sidebar">
        <button onClick={() => setSelectedSection("details")}>Account Details</button>
        <button onClick={() => setSelectedSection("orders")}>Previous Orders</button>
        <br />
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="content">
        {selectedSection === "details" && (
          <div>
            <h1>Hello, {userData.name}!</h1>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
          </div>
        )}
        {selectedSection === "orders" && (
          <div>
            <h2>Your Orders</h2>
            {userData.orders.length > 0 ? (
              <ul>
                {userData.orders.map((order) => (
                  <li key={order._id}>
                    <p>Order ID: {order._id}</p>
                    <p>Total: £{order.total}</p>
                    <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>You have no orders.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountPage;