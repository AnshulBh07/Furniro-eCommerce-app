import React from "react";
import { BsBagX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../sass/miniCartStyles.scss";
import MiniCartCard from "./MiniCartCard";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../services/formatCurrency";
import { BsCurrencyRupee } from "react-icons/bs";

function MiniCart() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); //enables us to call dispatch to update global state depending
  //actions

  //extracts cartTotal from reducer state
  const { cartItems, cartTotal } = useSelector((store) => store.cart);

  return (
    <div className="mini-cart">
      <h2>
        Shopping Cart
        <button onClick={() => dispatch({ type: "header/showCart" })}>
          <BsBagX className="icon" />
        </button>
      </h2>

      <hr />

      <div className="items">
        {cartItems.map((item, index) => {
          return <MiniCartCard key={index} item={item} />;
        })}
      </div>

      <div className="amount">
        <p>Subtotal</p>
        <p className="total-amount">
          <BsCurrencyRupee /> {formatCurrency(cartTotal)}
        </p>
      </div>

      <hr />

      <div className="btns">
        <button
          className="cart-btn"
          onClick={() => {
            navigate("/cart");
            dispatch({ type: "header/showCart" });
          }}
        >
          Cart
        </button>
        <button
          className="checkout-btn"
          onClick={() => {
            navigate("/checkout");
            dispatch({ type: "header/showCart" });
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default MiniCart;
