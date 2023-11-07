import React from "react";
import "../sass/cartInvoiceStyles.scss";
import { Link, useNavigate } from "react-router-dom";
import { BsCurrencyRupee } from "react-icons/bs";
import { useSelector } from "react-redux";
import { formatCurrency } from "../services/formatCurrency";

function CartInvoice() {
  const { cartTotal } = useSelector((store) => store.cart);
  const navigate = useNavigate();

  return (
    <div className="container__cart-invoice">
      <p className="promo-header">enter promo code</p>
      <label htmlFor="promo" className="promo-code">
        <input
          type="text"
          name="promo"
          id="promo"
          className="input-promo"
          placeholder="promo code"
        />
        <button className="btn-promo">submit</button>
      </label>

      <p className="redirect">
        <Link to={"/signUp"}>Sign in</Link> to your account to claim exciting
        rewards
      </p>

      <h2>promotions</h2>
      <p className="promo-offer">
        <span>
          free shipping on orders over <BsCurrencyRupee />
          3,000
        </span>

        <span className="offered">
          -<BsCurrencyRupee />
          500
        </span>
      </p>
      <hr />
      <p className="subtotal">
        subtotal{" "}
        <span>
          <BsCurrencyRupee />
          {formatCurrency(cartTotal)}
        </span>
      </p>
      <p className="ship-cost">
        shipping cost{" "}
        <span>
          <BsCurrencyRupee />
          500
        </span>
      </p>
      <p className="ship-discount">
        shipping discount{" "}
        <span>
          -<BsCurrencyRupee />
          500
        </span>
      </p>
      <p className="sales-tax">
        estimated sales tax <span>TBD</span>
      </p>
      <p className="est-total">
        estimated total amount{" "}
        <span>
          <BsCurrencyRupee />
          {formatCurrency(cartTotal)}
        </span>
      </p>

      <button className="btn-chkout" onClick={() => navigate("/checkout")}>
        checkout
      </button>
    </div>
  );
}

export default CartInvoice;
