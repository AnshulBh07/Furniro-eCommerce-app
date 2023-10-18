import React from "react";
import "../sass/filterBandStyles.scss";

function FilterBand() {
  return (
    <section className="section__filter">
      <div className="options__container">
        <div className="filter-info">
          <h2>filters</h2>
          <div className="filter-types">
            {/* each of these filters will have a drop down which shall appear on hover */}
            <div className="category">
              <p>Category</p>
              <ul className="category-submenu">
                <li>Bed</li>
                <li>Chair</li>
                <li>Wardrobes</li>
                <li>Kitchen</li>
                <li>Living</li>
              </ul>
            </div>

            <div className="price">
              <p>price</p>
              <ul className="price-submenu">
                <li>Bed</li>
                <li>Chair</li>
                <li>Wardrobes</li>
                <li>Kitchen</li>
                <li>Living</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sort-info">
          <div className="show">
            Show <span>15</span>
          </div>
          <div className="sort-by">
            <h2>sort by</h2>
            {/* will have a submenu */}
            <button className="sort-btn">Recommended</button>
            <div className="sort-options">
              <button>Price low to high</button>
              <button>Price high to low</button>
              <button>New Arrivals</button>
              <button>Discount</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilterBand;
