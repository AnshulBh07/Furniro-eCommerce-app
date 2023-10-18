import React, { useState } from "react";
import "../sass/productMainStyles.scss";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function ProductMainInfo({ details }) {
  console.log(details);
  let ratingVal = details.overall_rating;
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

  const colors = ["#b36902", "#0d0985", "#f7dea8", "#940000"];

  const [img, setImg] = useState(details.images[0]);

  function handleOptionChange(e) {
    setImg(details.images[e.target.id]);
  }

  return (
    <section className="product-info__main">
      <div className="container-main">
        <div className="images-main">
          {/* will contain 4 radio buttons */}
          {details.images.map((item, index) => {
            return (
              <label htmlFor={`${index}`} key={index}>
                <input
                  type="radio"
                  name="image-select"
                  id={`${index}`}
                  onChange={handleOptionChange}
                  className="image-select"
                />
                <img src={`${item}`} alt={`img-${index}`} />
              </label>
            );
          })}
        </div>

        <div className="bigger-image">
          <img src={`${img}`} alt="bigger-img" />
        </div>

        <div className="product-main-info">
          <h1>{details.title}</h1>
          <h2>Rp. {details.price}</h2>
          <div className="rating">
            <div className="stars">
              {/* assign stars with js logic */}
              {stars.map((item) => {
                return item;
              })}
            </div>
            <div className="separator"></div>
            <div className="reviews">
              <p>5 customer reviews</p>
            </div>
          </div>
          <p className="summary">{details.summary}</p>

          <div className="color-choices">
            <p>Colors</p>
            <div className="pick-color">
              {colors.map((item, index) => {
                return (
                  <label htmlFor={`${index + 10}`} key={index}>
                    <input
                      type="radio"
                      name="color-select"
                      id={`${index + 10}`}
                      className="color-select"
                    />
                    <div
                      className="color-picker"
                      style={{ backgroundColor: `${item}` }}
                    ></div>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="qty-container">
            <h2>qty</h2>
            <div className="btn-qty-layout">
              <button>
                <AiOutlineMinus />
              </button>
              <p>2</p>
              <button>
                <AiOutlinePlus />
              </button>
            </div>
          </div>

          <div className="btns-container">
            <button className="add-to-cart-btn">add to cart</button>
            <button className="buy-now-btn">buy now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductMainInfo;
