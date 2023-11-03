import React from "react";
import "../sass/priceSliderStyles.scss";

function PriceSlider() {
  return (
    <div className="container__price_slider">
      <p>Range</p>
      <div className="price-range-displayers">
        <label htmlFor="min-price" className="price-label">
          <span>min</span>
          <input
            type="number"
            id="min-price"
            name="min-price"
            min={500}
            max={180000}
            className="number-displayer"
          />
        </label>
        <p>-</p>
        <label htmlFor="max-price" className="price-label">
          <span>min</span>
          <input
            type="number"
            id="max-price"
            name="max-price"
            min={500}
            max={180000}
            className="number-displayer"
          />
        </label>
      </div>
    </div>
  );
}

export default PriceSlider;
