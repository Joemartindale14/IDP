import React from "react";
import "./OrderSteps.css";

const OrderSteps = () => {
  return (
    <div className="order-steps">
      <div className="order-steps-contents">
        <h2>How you can make an order</h2>
        <div className="order-steps-contents-text">
          <div className="order-step">
            <img src="src/assets/location-pin.png" alt="location" />
            <p>Find a Local Business near you!</p>
          </div>
          <div className="order-step">
            <img src="../../assets/diet.png" alt="product" />
            <p>Purchase your products!</p>
          </div>
          <div className="order-step">
            <img src="src/assets/shops.png" alt="collection" />
            <p>Collected from the chosen Business!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSteps;