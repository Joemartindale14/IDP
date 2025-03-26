import React from "react";
import { useLocation } from "react-router-dom";
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderDetails } = location.state;

  return (
    <div className="order-confirmation">
      <h1>Order Confirmation</h1>
      <p>Thank you for your order!</p>
      <hr />
      <div className="order-details">
        <h2>Order Details</h2>
        <p><strong>First Name:</strong> {orderDetails.firstName}</p>
        <p><strong>Last Name:</strong> {orderDetails.lastName}</p>
        <p><strong>Email:</strong> {orderDetails.email}</p>
        <p><strong>Phone:</strong> {orderDetails.phone}</p>
        <p><strong>Collection Time:</strong> {orderDetails.collectionTime}</p>
        <p><strong>Total Amount:</strong> £{orderDetails.totalAmount}</p>
      </div>
    </div>
  );
};

export default OrderConfirmation;