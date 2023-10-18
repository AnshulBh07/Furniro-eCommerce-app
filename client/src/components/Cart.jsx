import React from "react";
import "../sass/cartStyles.scss";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  return (
    <section className="cart-details__section">
      <div className="cart-info">
        <div className="cart-totals">
          <h2>cart totals</h2>
          <div className="subtotal">
            <p className="field">subtotal</p>
            <p className="value">rp. 250.0000</p>
          </div>
          <div className="total-price">
            <p className="field">total</p>
            <p className="sum">rp. 250.000</p>
          </div>
          <button
            className="btn-checkout"
            onClick={() => navigate("/checkout")}
          >
            checkout
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
