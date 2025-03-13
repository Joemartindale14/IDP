import React, { useEffect, useState } from "react";
import axios from "../../axiosConfig";
import "./AccountPage.css";

const AccountPage = ({ user }) => {
  const [userData, setUserData] = useState(null);

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

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="account-page">
      <h1>Welcome, {userData.name}</h1>
      <p>Email: {userData.email}</p>
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
  );
};

export default AccountPage;