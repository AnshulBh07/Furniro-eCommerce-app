import React from "react";
import "../sass/miniCartCardStyles.scss";
import { FaTrashAlt } from "react-icons/fa";

function MiniCartCard() {
  return (
    <div className="container__mini-cart-card">
      <a href="/product">
        <img
          src="https://ii1.pepperfry.com/media/catalog/product/h/a/1600x1760/hairo-velvet-1-seater-sofa-in-forest-green-colour-hairo-velvet-1-seater-sofa-in-forest-green-colour-tzrtl1.jpg"
          alt="item-img"
        />
      </a>

      <div className="product-info">
        <h3>Asgaard sofa</h3>
        <p>
          <span className="qty-minicart">
            <button className="qty-btn reduce1">-</button>
            <p>1</p>
            <button className="qty-btn increase1">+</button>
          </span>
          X<span className="minicart-product-amount">Rp. 250.000</span>
        </p>
      </div>
      <button className="delete-btn">
        <FaTrashAlt className="delete-icon" />
      </button>
    </div>
  );
}

export default MiniCartCard;
