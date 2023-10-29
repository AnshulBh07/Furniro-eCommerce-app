import React, { useEffect, useState } from "react";
import "../sass/productMainStyles.scss";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { rating } from "../services/getRating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsCurrencyRupee } from "react-icons/bs";
import { formatCurrency } from "../services/formatCurrency";
import { addToFav } from "../actions/favsActions";
import { showSuccesToast, showWarnToast } from "../services/toastMessages";

function ProductMainInfo({ details }) {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.cartItems);
  const favItems = useSelector((store) => store.favourites.favs);

  const stars = rating(details.overall_rating);

  const colors = ["#b36902", "#0d0985", "#f7dea8", "#940000"];

  const [img, setImg] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [sofaSeats, setSofaSeats] = useState(1);
  const [isSofa, setIsSofa] = useState(false);

  // whenever there is a change in details a new image is set
  useEffect(() => {
    setImg(details.images[0]);
  }, [details]);

  // to set sofa seats
  useEffect(() => {
    const titleSplit = details.title.split(" "); //tokenize the title

    // now traverse over the array and check if we find an integer value, set that value as sofaSeats
    for (var i = 0; i < titleSplit.length; i++) {
      if (titleSplit[i] >= "1" && titleSplit[i] <= "9")
        setSofaSeats(Number(titleSplit[i]));
      if (titleSplit[i].toLowerCase() === "sofa") setIsSofa(true);
    }
  }, [details.title]);

  function handleOptionChange(e) {
    setImg(details.images[e.target.id]);
  }

  function isPresentCart(items, details) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].sku === details.sku) return true;
    }
    return false;
  }

  function isPresentFav(items, val) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].sku === val) return true;
    }
    return false;
  }

  const discounted_price = Math.round(
    details.price - (details.discount_value / 100) * details.price
  );

  function handleAddToCart() {
    if (isPresentCart(items, details))
      showWarnToast("Item already present in cart. Please update it there.");
    else {
      dispatch(
        addToCart({
          ...details,
          discounted: discounted_price,
          qty: quantity,
        })
      );
      showSuccesToast("Item added to cart.");
    }
  }

  function handleAddFavClick() {
    if (isPresentFav(favItems, details.sku))
      showWarnToast("Item already present in favourites.");
    else {
      dispatch(addToFav(details));
      showSuccesToast("Item added to favourites.");
    }
  }

  return (
    <section className="product-info__main">
      <div className="container-main">
        <div
          className="container-images"
          style={{
            flexDirection: sofaSeats > 1 && isSofa ? "column-reverse" : "row",
          }}
        >
          <div
            className="images-main"
            style={{
              flexDirection: sofaSeats > 1 && isSofa ? "row" : "column",
            }}
          >
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
                    style={{
                      width: sofaSeats > 1 && isSofa ? "8rem" : "4rem",
                    }}
                  />
                  <img src={`${item}`} alt={`img-${index}`} />
                </label>
              );
            })}
          </div>

          <div className="bigger-image">
            <img
              src={`${img}`}
              alt="bigger-img"
              style={{
                maxHeight: sofaSeats > 1 && isSofa ? "40rem" : "35rem",
                maxWidth: sofaSeats > 1 && isSofa ? "40rem" : "35rem",
              }}
            />
          </div>
        </div>

        <div className="product-main-info">
          <h1>{details.title}</h1>
          <div className="price-div">
            <h2 className="final-price">
              <BsCurrencyRupee className="final-rupee-icon" />{" "}
              {formatCurrency(discounted_price)}
            </h2>
            <h2 className="actual-price">
              <BsCurrencyRupee /> {formatCurrency(details.price)}
            </h2>
          </div>
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

          <div className="qty-fav__container">
            <div className="qty-container">
              <h2>qty</h2>
              <div className="btn-qty-layout">
                <button
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  <AiOutlineMinus />
                </button>
                <p>{quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)}>
                  <AiOutlinePlus />
                </button>
              </div>
            </div>

            <button className="btn-addFav" onClick={handleAddFavClick}>
              {isPresentFav(favItems, details.sku) ? (
                <AiFillHeart className="heart-full" />
              ) : (
                <AiOutlineHeart className="heart-empty" />
              )}
            </button>
          </div>

          <div className="btns-container">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              add to cart
            </button>
            <ToastContainer
              position="top-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <button className="buy-now-btn">buy now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductMainInfo;
