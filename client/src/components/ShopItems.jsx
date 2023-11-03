import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import "../sass/shopItemsStyles.scss";
import { usePagination } from "../custom-Hooks/Pagination";
import { FaGreaterThan } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { filterData } from "../services/filterDataShop";
import { sortData } from "../services/sortedDataShop";

function ShopItems({ data }) {
  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    if (searchParam.get("page") === null) {
      searchParam.set("page", "1");
      setSearchParam(searchParam);
    }
  }, [searchParam, setSearchParam]);

  // perform filtering here with help of search params
  const filters = {
    category: searchParam.get("category"),
    room_type: searchParam.get("room"),
    price_range: searchParam.get("price"),
    brand_name: searchParam.get("brand"),
    min_price: searchParam.get("min"),
    max_price: searchParam.get("max"),
  };

  let filteredData = filterData(data, filters);

  // performing sorting if sort is present
  var finalData = filteredData;
  const sort_type = searchParam.get("sort");
  if (sort_type) {
    finalData = sortData(finalData, sort_type);
  }

  const currPage = Number(searchParam.get("page"));

  const range = usePagination({
    totalCount: finalData.length, //total number of items
    pageSize: 12, //number of items to display on one page
    currentPage: currPage, //current page
    siblings: 1,
  });

  let totalPages = Math.ceil(finalData.length / 12);

  // slice the array based on the currPage
  finalData = finalData.slice((currPage - 1) * 12, currPage * 12);

  return (
    <section className="shop-items__section">
      <div className="items__container">
        {finalData.map((item, index) => {
          return <ProductCard item={item} key={index} />;
        })}
      </div>
      {/* let's make the pagination pill/bar */}
      <div className="pagination-pill">
        <button
          className="next-page-btn"
          onClick={() => {
            searchParam.set("page", currPage - 1);
            setSearchParam(searchParam);
            window.scrollTo(0, 300);
          }}
          disabled={currPage === 1}
        >
          <FaGreaterThan className="prev-icon" />
        </button>
        {range.map((item, index) => {
          return (
            <button
              className={`pagination-btn ${item === "..." ? "dots" : ""} ${
                index + 1 === currPage ? "btn-active" : ""
              }`}
              key={index}
              onClick={(e) => {
                searchParam.set("page", e.target.innerText);
                setSearchParam(searchParam);
              }}
            >
              {item}
            </button>
          );
        })}
        <button
          className="next-page-btn"
          onClick={() => {
            searchParam.set("page", currPage + 1);
            setSearchParam(searchParam);

            window.scrollTo(0, 300);
          }}
          disabled={currPage === totalPages}
        >
          <FaGreaterThan className="next-icon" />
        </button>
      </div>
    </section>
  );
}

export default ShopItems;
