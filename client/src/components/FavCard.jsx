import React from "react";
import "../sass/favCardStyles.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFav } from "../actions/favsActions";
import { addToCart } from "../actions/cartActions";
import { showSuccesToast, showWarnToast } from "../services/toastMessages";

function FavCard({ item }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);

  const discounted_price = Math.round(
    item.price - (item.discount_value / 100) * item.price
  );

  function handleRemoveFavClick() {
    dispatch(removeFromFav(item));
  }

  function isPresentCart(cartItems, details) {
    for (var i = 0; i < cartItems.length; i++) {
      if (cartItems[i].sku === details.sku) return true;
    }
    return false;
  }

  function handleAddToCartClick() {
    if (isPresentCart(cartItems, item))
      showWarnToast("Item already present in cart. Please update it there.");
    else {
      dispatch(
        addToCart({
          ...item,
          discounted: discounted_price,
          qty: 1,
        })
      );
      showSuccesToast("Item added to cart.");
    }
  }

  return (
    <div className="container__fav-card">
      <img src={`${item.images[0]}`} alt="fav-product-img" />
      <p>{item.title}</p>
      <button className="btn-add-cart" onClick={handleAddToCartClick}>
        Add to cart
      </button>
      <button className="btn-remove-fav" onClick={handleRemoveFavClick}>
        remove
      </button>
    </div>
  );
}

export default FavCard;
