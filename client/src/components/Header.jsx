import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { navItems } from "../resources/links";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import "../sass/headerStyles.scss";
import MiniCart from "./MiniCart";
import Favourites from "./Favourites";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Header({ setHide }) {
  const [showCart, setShowCart] = useState(false);
  const [favourites, setFavourites] = useState(false);
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth0();

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
        <button
          onClick={() => {
            if (isAuthenticated) {
              setHide(true);
              logout();
            } else {
              setHide(true);
              navigate("/login");
            }
          }}
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
        <button>
          <AiOutlineSearch className="option-icon" />
        </button>
        <button onClick={() => setFavourites(true)}>
          <AiOutlineHeart className="option-icon" />
        </button>
        <button onClick={() => setShowCart(true)}>
          <AiOutlineShoppingCart className="option-icon" />
          <span className="no-of-items"></span>
        </button>

        {/* mini cart only visible when toggled by cart icon */}
        {showCart && <MiniCart setShowCart={setShowCart} />}
        {favourites && <Favourites setFavourites={setFavourites} />}
      </div>

      {/* mini-cart on div */}
      {(showCart || favourites) && <div className="mini-cart-bg"></div>}
    </header>
  );
}

export default Header;
