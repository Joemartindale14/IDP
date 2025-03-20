import React from "react";
import "./OrderSteps.css";
import locationPin from "../../assets/location-pin.png";
import diet from "../../assets/diet.png";
import shops from "../../assets/shops.png";

const OrderSteps = () => {
  return (
    <div className="order-steps">
      <div className="order-steps-contents">
        <h2>How you can make an order</h2>
        <div className="order-steps-contents-text">
          <div className="order-step">
            <img src={locationPin} alt="location" />
            <p>Find a Local Business near you!</p>
          </div>
          <div className="order-step">
            <img src={diet} alt="product" />
            <p>Purchase your products!</p>
          </div>
          <div className="order-step">
            <img src={shops} alt="collection" />
            <p>Collected from the chosen Business!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSteps;