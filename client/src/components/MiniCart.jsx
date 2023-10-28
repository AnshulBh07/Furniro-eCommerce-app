import React from "react";
import { BsBagX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../sass/miniCartStyles.scss";
import MiniCartCard from "./MiniCartCard";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../services/formatCurrency";
import { BsCurrencyRupee } from "react-icons/bs";

function MiniCart({ setShowCart }) {
  const navigate = useNavigate();
  const dispatch = useDispatch(); //enables us to call dispatch to update global state depending
  //actions

  const total = useSelector((store) => store.cart.cartTotal); //extracts cartTotal from reducer state
  const items = useSelector((store) => store.cart.cartItems);

  return (
    <div className="mini-cart">
      <h2>
        Shopping Cart
        <button onClick={() => setShowCart(false)}>
          <BsBagX className="icon" />
        </button>
      </h2>

      <hr />

      <div className="items">
        {items.map((item, index) => {
          return <MiniCartCard key={index} item={item} />;
        })}
      </div>

      <div className="amount">
        <p>Subtotal</p>
        <p className="total-amount">
          <BsCurrencyRupee /> {formatCurrency(total)}
        </p>
      </div>

      <hr />

      <div className="btns">
        <button
          className="cart-btn"
          onClick={() => {
            navigate("/cart");
            setShowCart(false);
          }}
        >
          Cart
        </button>
        <button
          className="checkout-btn"
          onClick={() => {
            navigate("/checkout");
            setShowCart(false);
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default MiniCart;
