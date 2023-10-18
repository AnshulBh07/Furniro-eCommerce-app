import React from "react";
import { BsBagX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../sass/miniCartStyles.scss";
import MiniCartCard from "./MiniCartCard";

function MiniCart({ setShowCart }) {
  const navigate = useNavigate();

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
        <MiniCartCard />
        <MiniCartCard />
        <MiniCartCard />
        <MiniCartCard />
        <MiniCartCard />
        <MiniCartCard />
        <MiniCartCard />
        <MiniCartCard />
        <MiniCartCard />
        <MiniCartCard />
        <MiniCartCard />
        <MiniCartCard />
      </div>

      <div className="amount">
        <p>Subtotal</p>
        <p className="total-amount">Rp. 2.500.000</p>
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
