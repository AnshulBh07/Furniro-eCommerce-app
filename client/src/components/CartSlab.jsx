import React from "react";
import "../sass/cartSlabStyles.scss";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../actions/cartActions";
import { formatCurrency } from "../services/formatCurrency";
import { BsCurrencyRupee } from "react-icons/bs";

function CartSlab({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="container__cart-slab">
      <div className="product-info-container">
        <p className="product-name">{item.title}</p>
        <div className="product-info">
          <div className="img-container">
            <img src={`${item.images[0]}`} alt="product-pic" />
            <div className="sku">
              <p className="sku-text">
                <span>SKU: </span>
                {item.sku}
              </p>
              <p style={{ color: "#b88e2f" }}>in stock</p>
            </div>
          </div>

          <div className="price">
            <p>each</p>
            <div className="price-container">
              <p className="actual">
                <BsCurrencyRupee />
                {formatCurrency(item.price)}
              </p>
              <p className="discounted">
                <BsCurrencyRupee />
                {formatCurrency(item.discounted)}
              </p>
            </div>
          </div>
          <div className="qty-btns-container">
            <p>quantity</p>
            <div className="qty-btns">
              <button
                className="qty-btn btn-decrease-qty"
                onClick={() => dispatch(decreaseQuantity(item))}
                disabled={item.qty === 1}
              >
                -
              </button>
              <p>{item.qty}</p>
              <button
                className="qty-btn btn-increase-qty"
                onClick={() => dispatch(increaseQuantity(item))}
              >
                +
              </button>
            </div>
          </div>
          <div className="total-item-price">
            <p>total</p>
            <p className="total-price">
              <BsCurrencyRupee />
              {formatCurrency(item.discounted * item.qty)}
            </p>
          </div>
        </div>
      </div>

      <button
        className="delete-btn-container"
        onClick={() => dispatch(removeFromCart(item))}
      >
        x
      </button>
    </div>
  );
}

export default CartSlab;
