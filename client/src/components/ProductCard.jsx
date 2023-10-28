import React from "react";
import "../sass/productCardStyles.scss";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { rating } from "../services/getRating";
import { useSelector } from "react-redux";
import { BsCurrencyRupee } from "react-icons/bs";
import { formatCurrency } from "../services/formatCurrency";

function ProductCard({ item }) {
  const navigate = useNavigate();

  let ratingVal = item.overall_rating;
  var stars = rating(ratingVal);

  function handleClick() {
    navigate(`products/${item.sku}`);
  }

  const favItems = useSelector((store) => store.favourites.favs);

  function isPresentFav(favItems, val) {
    for (var i = 0; i < favItems.length; i++) {
      if (favItems[i] === val) return true;
    }
    return false;
  }

  return (
    <div className="container__productCard">
      <button className="btn-product" onClick={handleClick}>
        <div className="image__area">
          <img src={`${item.image}`} alt="furniro" />
          <div className="extras">
            {item.new && <div className="new">New</div>}
            <div className="discount">- {item.discount_value}%</div>
          </div>
        </div>

        <div className="favourites">
          {isPresentFav(favItems, item.sku) ? (
            <AiFillHeart className="heart-fill" />
          ) : (
            <AiOutlineHeart className="heart-empty" />
          )}
        </div>

        <div className="info">
          <h3>{item.title}</h3>

          <div className="stars">
            {/* assign stars with js logic */}
            {stars.map((item) => {
              return item;
            })}
          </div>

          <p>{item.tag}</p>
          <div className="price">
            <h3 className="discounted">
              <BsCurrencyRupee className="final-rupee-icon" />{" "}
              {formatCurrency(
                Math.round(
                  item.price - (item.discount_value / 100) * item.price
                )
              )}
            </h3>
            <h3 className="actual">
              {" "}
              <BsCurrencyRupee className="actual-rupee-icon" />{" "}
              {formatCurrency(item.price)}
            </h3>
          </div>
        </div>
      </button>
    </div>
  );
}

export default ProductCard;
