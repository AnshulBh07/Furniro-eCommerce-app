import React from "react";
import logo from "../assets/images/logo.png";
import { navItems } from "../resources/links";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUser,
  AiFillHeart,
} from "react-icons/ai";
import "../sass/headerStyles.scss";
import MiniCart from "./MiniCart";
import Favourites from "./Favourites";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import ProfileSubmenu from "./ProfileSubmenu";

function Header() {
  const dispatch = useDispatch();

  const { search, searchClick, showCart, favourites, showProfile } =
    useSelector((store) => store.header);

  const { user, isAuthenticated } = useAuth0();

  const cartItems = useSelector((store) => store.cart.cartItems);
  const { favs } = useSelector((store) => store.favourites);

  function handleSearch(e) {
    dispatch({ type: "header/setSearch", payload: e.target.value });
  }

  function handleSearchClick() {
    dispatch({ type: "header/searchClick" });
  }

  return (
    <header>
      <div className="brand">
        <img src={`${logo}`} alt="logo" />
        <h2>Furniro</h2>
      </div>

      <div className="navbar">
        <ul className="navlinks">
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.link}>
                  <button className="section-btn">{item.name}</button>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="options">
        {showProfile && <ProfileSubmenu />}
        <button
          onClick={() => {
            if (isAuthenticated) {
              dispatch({ type: "header/showProfileSubmenu" });
            } else {
              dispatch({ type: "header/showProfileSubmenu" });
            }
          }}
          className="btn-options-icons"
        >
          {/* if the user is authenticated set content as google image else icon */}
          {isAuthenticated ? (
            <img
              src={`${user.picture}`}
              alt="profile-pic"
              className="profile-pic"
            />
          ) : (
            <AiOutlineUser className="option-icon" />
          )}
        </button>
        <input
          type="text"
          placeholder="enter keyword"
          name="search-bar"
          value={search}
          onChange={handleSearch}
          className={`search-bar ${searchClick ? "search-visible" : ""}`}
        />
        <button className="btn-options-icons">
          <AiOutlineSearch
            className="option-icon"
            onClick={handleSearchClick}
          />
        </button>
        <button
          onClick={() => dispatch({ type: "header/setFav" })}
          className="btn-options-icons"
        >
          {favs.length > 0 ? (
            <AiFillHeart className="option-icon full" />
          ) : (
            <AiOutlineHeart className="option-icon" />
          )}
        </button>
        <button
          onClick={() => dispatch({ type: "header/showCart" })}
          className="btn-options-icons"
        >
          <AiOutlineShoppingCart className="option-icon" />
          {cartItems.length > 0 && (
            <p className="no-of-items">
              <span>{cartItems.length}</span>
            </p>
          )}
        </button>

        {/* mini cart only visible when toggled by cart icon */}
        {showCart && <MiniCart />}
        {favourites && <Favourites />}
      </div>

      {/* mini-cart on div */}
      {(showCart || favourites) && <div className="mini-cart-bg"></div>}
    </header>
  );
}

export default Header;
