import React, { useEffect, useState } from "react";
import "../sass/filterBandStyles.scss";
import { getAllCategories } from "../services/allCategories";
import { getAllRoomTypes } from "../services/allRoomTypes";
import { useSearchParams } from "react-router-dom";
import { getAllBrands } from "../services/allBrands";

function FilterBand() {
  const [selectValue, setSelectValue] = useState("Recommended");
  const [categories, setCategories] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [brands, setBrands] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  // get all categories
  useEffect(() => {
    const fetchAllCategories = async () => {
      var result = await getAllCategories();
      if (result && result.length > 0) {
        result = result.map((val) => {
          return val.toLowerCase();
        });
        setCategories(result);
      }
    };

    fetchAllCategories();
  }, []);

  //get all room-types
  useEffect(() => {
    const fetchAllRoomTypes = async () => {
      const result = await getAllRoomTypes();
      if (result && result.length > 0) {
        setRooms(result);
      }
    };

    fetchAllRoomTypes();
  }, []);

  //get all brands
  useEffect(() => {
    const fetchAllBrands = async () => {
      const result = await getAllBrands();
      if (result && result.length > 0) {
        setBrands(result);
      }
    };
    fetchAllBrands();
  }, []);

  const handleCategoryFilterClick = (e) => {
    searchParam.set("page", 1);
    setSearchParam(searchParam);
    searchParam.set("category", e.target.innerText);
    setSearchParam(searchParam);
  };

  const handleRoomFilterClick = (e) => {
    searchParam.set("page", 1);
    setSearchParam(searchParam);
    searchParam.set("room", e.target.innerText);
    setSearchParam(searchParam);
  };

  const handleSortByClick = (e) => {
    searchParam.set("page", 1);
    setSearchParam(searchParam);
    searchParam.set("sort", e.target.value);
    setSearchParam(searchParam);
    setSelectValue(e.target.value);
  };

  const handleBrandClick = (e) => {
    searchParam.set("page", 1);
    setSearchParam(searchParam);
    searchParam.set("brand", e.target.innerText);
    setSearchParam(searchParam);
  };

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
                {categories.sort().map((item, index) => {
                  return (
                    <li key={index}>
                      <button
                        className="category-btn"
                        onClick={handleCategoryFilterClick}
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}
                <button
                  className="category-btn"
                  onClick={handleCategoryFilterClick}
                >
                  Any
                </button>
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
            {/* room types */}
            <div className="room-type">
              <p>Room Type</p>
              <ul className="room-type-submenu">
                {rooms.sort().map((item, index) => {
                  return (
                    <li key={index}>
                      <button
                        className="room-type-btn"
                        onClick={handleRoomFilterClick}
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* brand */}
            <div className="brand-name">
              <p>brand</p>
              <ul className="brand-submenu">
                {brands.sort().map((item, index) => {
                  return (
                    <li key={index}>
                      <button
                        className="brand-name-btn"
                        onClick={handleBrandClick}
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}
                <button className="brand-name-btn" onClick={handleBrandClick}>
                  Any
                </button>
              </ul>
            </div>
          </div>
        </div>

        <div className="sort-info">
          <div className="show">
            Show <span>12</span>
          </div>
          <div className="sort-by">
            <h2>sort by</h2>
            {/* will have a submenu */}
            <select
              name="sort-by"
              id="sort-by"
              className="sort-options"
              value={selectValue}
              onChange={handleSortByClick}
            >
              <option value={"Recommended"}>Recommended</option>
              <option value={`low-high`}>Price low to high</option>
              <option value={"high-low"}>Price high to low</option>
              <option value={"new"}>New Arrivals</option>
              <option value={"discount"}>Discount</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilterBand;
