import React from "react";
import "../sass/cartStyles.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartSlab from "./CartSlab";
import CartInvoice from "./CartInvoice";

function Cart() {
  const navigate = useNavigate();

  const { cartItems, cartTotal } = useSelector((store) => store.cart);
  console.log(cartItems);

  return (
    <section className="cart-details__section">
      <div className="headers">
        <Link to={"/shop"}>continue shopping</Link>
        <p className="no-of-items">{cartItems.length} items</p>
        <p>
          <span>need help? call</span> (800) 946-3682
        </p>
      </div>

      <hr />

      <div className="cart-main-info">
        <div className="container-cart-items">
          {cartItems.map((item, index) => {
            return <CartSlab item={item} key={index} />;
          })}
        </div>

        <div className="container-cart-total">
          <CartInvoice />
        </div>
      </div>
    </section>
  );
}

export default Cart;
