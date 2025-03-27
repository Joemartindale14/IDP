import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = ({ setShowLogin, user }) => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!user) {
      setShowLogin(true);
    } else {
      navigate("/order");
    }
  };

  return (
    <div className="cart">
      <h1>Products in Your Cart</h1>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>£{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>£{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>£{getTotalCartAmount()}</p>
            </div>
            <hr />
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>£{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()}</b>
            </div>
          </div>
          <button onClick={handleCheckout}>
            CONTINUE TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Enter a promo code</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;