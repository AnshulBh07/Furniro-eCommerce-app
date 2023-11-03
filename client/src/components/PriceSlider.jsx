import React, { useEffect, useRef, useState } from "react";
import "../sass/priceSliderStyles.scss";
import { useSearchParams } from "react-router-dom";
import { BsCurrencyRupee } from "react-icons/bs";
import { formatCurrency } from "../services/formatCurrency";

function PriceSlider() {
  const [minValue, setMinValue] = useState(500);
  const [maxValue, setMaxValue] = useState(180000);
  const [searchParams, setSearchParams] = useSearchParams();
  const slideRef_1 = useRef(null);
  const slideRef_2 = useRef(null);

  // useEffect hook to update the width of div depending on these values
  useEffect(() => {
    let minValPerc = Math.ceil((minValue / 180000) * 100);
    let maxValPerc = Math.ceil((maxValue / 180000) * 100);

    // set slider widths here
    slideRef_1.current.style.width = `${minValPerc}%`;
    slideRef_2.current.style.width = `${maxValPerc}%`;
  }, [minValue, maxValue]);

  function handleSliderChange(e) {
    if (e.target.name === "min-slider" || e.target.name === "min-price")
      setMinValue(e.target.value);
    else setMaxValue(e.target.value);
  }

  function applyRangeChanges() {
    searchParams.set("min", minValue);
    setSearchParams(searchParams);
    searchParams.set("max", maxValue);
    setSearchParams(searchParams);
  }

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
            value={minValue}
            className="number-displayer"
            onChange={() => handleSliderChange}
          />
        </label>
        <p>-</p>
        <label htmlFor="max-price" className="price-label">
          <span>max</span>
          <input
            type="number"
            id="max-price"
            name="max-price"
            min={500}
            max={180000}
            step={1}
            value={maxValue}
            className="number-displayer"
            onChange={() => handleSliderChange}
          />
        </label>
      </div>

      <div className="progress-bar">
        <div className="slider1" ref={slideRef_1}></div>
        <div className="slider2" ref={slideRef_2}></div>
        <div className="range-inputs">
          <input
            type="range"
            name="min-slider"
            id="min-slider"
            min={500}
            max={179999}
            step={1}
            value={minValue}
            className="range-slider min"
            onChange={handleSliderChange}
          />
          <input
            type="range"
            name="max-slider"
            id="max-slider"
            min={501}
            max={180000}
            value={maxValue}
            className="range-slider max"
            onChange={handleSliderChange}
          />
        </div>
      </div>

      <div className="final-range">
        <div className="final-price-range">
          <p>
            <BsCurrencyRupee className="rupee-icon" />
            {formatCurrency(minValue)}
          </p>
          <p> - </p>
          <p>
            <BsCurrencyRupee className="rupee-icon" />
            {formatCurrency(maxValue)}
          </p>
        </div>
        <button className="btn-apply-range" onClick={applyRangeChanges}>
          Apply
        </button>
      </div>
    </div>
  );
}

export default PriceSlider;
