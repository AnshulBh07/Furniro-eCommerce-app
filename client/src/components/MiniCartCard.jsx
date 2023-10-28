import React, { useState } from "react";
import "../sass/miniCartCardStyles.scss";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../actions/cartActions";
import { formatCurrency } from "../services/formatCurrency";
import { BsCurrencyRupee } from "react-icons/bs";

function MiniCartCard({ item }) {
  const dispatch = useDispatch();

  function removeFromCartClick() {
    dispatch(removeFromCart(item));
  }

  return (
    <div className="container__mini-cart-card">
      <a href="/product">
        <img src={`${item.images[0]}`} alt="item-img" />
      </a>

      <div className="product-info">
        <h3>{item.title}</h3>
        <div className="minicart-item">
          <span className="qty-minicart">
            <button
              className="qty-btn reduce1"
              onClick={() => {
                dispatch(decreaseQuantity(item));
              }}
              disabled={item.qty <= 1}
            >
              -
            </button>
            <p className="minicart-item-qty">{item.qty}</p>
            <button
              className="qty-btn increase1"
              onClick={() => dispatch(increaseQuantity(item))}
            >
              +
            </button>
          </span>
          X
          <span className="minicart-product-amount">
            <BsCurrencyRupee /> {formatCurrency(item.qty * item.discounted)}
          </span>
        </div>
      </div>
      <button className="delete-btn" onClick={removeFromCartClick}>
        <FaTrashAlt className="delete-icon" />
      </button>
    </div>
  );
}

export default MiniCartCard;
