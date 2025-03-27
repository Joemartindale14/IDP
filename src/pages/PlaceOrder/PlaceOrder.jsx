import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosConfig";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = ({ user }) => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [collectionTime, setCollectionTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleCollectionTimeChange = (e) => {
    setCollectionTime(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderDetails = {
      userId: user._id,
      firstName,
      lastName,
      email,
      phone,
      collectionTime,
      totalAmount: getTotalCartAmount() + 2,
    };

    try {
      const response = await axios.post("/orders/create", orderDetails);
      navigate("/order-confirmation", { state: { orderDetails: response.data } });
    } catch (error) {
      console.error("Failed to create order", error);
    }
  };

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className="title">Collection Information</p>
        <div className="multi-fields">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <p className="collection-time">Choose Collection Time:</p>
        <input
          type="time"
          id="collection-time"
          name="collection-time"
          value={collectionTime}
          onChange={handleCollectionTimeChange}
          required
        />
        <p className="collection-text">
          Local Foods operates on a 'pay at collection' service, meaning that customers are required to pay for their order when picking it up from the desired business. If an order is placed but remains uncollected, the customer's account will be banned from placing future orders through the Local Foods website. This policy ensures that resources are properly allocated and that customers are committed to collecting their orders as scheduled.
        </p>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>£{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                £{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()}
              </b>
            </div>
          </div>
          <hr />
          <button type="submit">CONFIRM ORDER</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;