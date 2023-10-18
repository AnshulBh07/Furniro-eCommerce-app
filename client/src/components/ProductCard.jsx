import React, { useState } from "react";
import "../sass/productCardStyles.scss";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
  const [heart, setHeart] = useState(false);
  const navigate = useNavigate();

  function handleFavouriteClick() {
    setHeart(!heart);
  }

  let ratingVal = item.overall_rating;
  var stars = [];

  for (var i = 0; i < 5; i++) {
    if (ratingVal >= 1)
      stars.push(
        <BsStarFill
          className="full-star"
          style={{ color: "#ffc700" }}
          key={i}
        />
      );
    else if (ratingVal > 0 && ratingVal < 1)
      stars.push(
        <BsStarHalf
          className="half-star"
          style={{ color: "#ffc700" }}
          key={i}
        />
      );
    else
      stars.push(
        <BsStarFill
          className="empty-star"
          style={{ color: "#dfdfdf" }}
          key={i}
        />
      );

    ratingVal = ratingVal - 1;
  }

  function handleClick() {
    navigate(`products/${item.sku}`);
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

        <div className="favourites" onClick={handleFavouriteClick}>
          {heart ? (
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
              Rp{" "}
              {Math.round(
                item.price - (item.discount_value / 100) * item.price
              )}
            </h3>
            <h3 className="actual">Rp {item.price}</h3>
          </div>
        </div>
      </button>
    </div>
  );
}

export default ProductCard;
