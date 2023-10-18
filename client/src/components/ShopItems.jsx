import React from "react";
import ProductCard from "./ProductCard";
import "../sass/shopItemsStyles.scss";

function ShopItems({ data }) {
  data = data.sort(() => Math.random() - 0.5);

  return (
    <section className="shop-items__section">
      <div className="items__container">
        {data.map((item, index) => {
          return <ProductCard item={item} key={index} />;
        })}
      </div>
    </section>
  );
}

export default ShopItems;
