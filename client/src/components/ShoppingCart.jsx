import React from "react";
import SectionBanner from "./SectionBanner";
import FooterBand from "./FooterBand";
import "../sass/shoppingCartStyles.scss";
import Cart from "./Cart";

function ShoppingCart() {
  return (
    <div className="container container__shopping-cart">
      <SectionBanner title={"Cart"} />
      <Cart />
      <FooterBand />
    </div>
  );
}

export default ShoppingCart;
