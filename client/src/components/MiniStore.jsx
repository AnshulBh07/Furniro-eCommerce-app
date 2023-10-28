import React from "react";
import "../sass/homeStoreStyles.scss";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

function MiniStore({ data }) {
  data = data.sort(() => Math.random() - 0.5);
  data = data.slice(0, 8);
  const navigate = useNavigate();

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
        <button
          className="show-more-btn"
          onClick={() => {
            navigate("/shop");
            window.scrollTo(0, 0);
          }}
        >
          show more
        </button>
      </div>
    </section>
  );
}

export default MiniStore;
