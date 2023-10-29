import React, { useEffect, useState } from "react";
import "../sass/filterBandStyles.scss";
import { getAllCategories } from "../services/allCategories";
import { getAllRoomTypes } from "../services/allRoomTypes";
import { useSearchParams } from "react-router-dom";

function FilterBand() {
  const [selectValue, setSelectValue] = useState("Recommended");
  const [categories, setCategories] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  console.log(searchParam);
  console.log(selectValue);

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

  const handleCategoryFilterClick = (e) => {
    searchParam.set("category", e.target.innerText);
    setSearchParam(searchParam);
  };

  const handleRoomFilterClick = (e) => {
    searchParam.set("room", e.target.innerText);
    setSearchParam(searchParam);
  };

  const handleSortByClick = (e) => {
    searchParam.set("sort", e.target.value);
    setSearchParam(searchParam);
    setSelectValue(e.target.value);
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
