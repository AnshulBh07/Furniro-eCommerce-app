import React, { useEffect, useState } from "react";
import "../sass/homeStoreStyles.scss";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getCardData } from "../services/ProductCardData";

function MiniStore({ data }) {
  data = data.sort(() => Math.random() - 0.5);
  data = data.slice(0, 8);

  return (
    <section className="store">
      <div className="mini-store">
        <h1>our products</h1>
        <div className="products">
          {/* will contain product cards */}
          {data.map((item) => {
            return <ProductCard item={item} key={item.sku} />;
          })}
        </div>
        <button className="show-more-btn">show more</button>
      </div>
    </section>
  );
}

export default MiniStore;
