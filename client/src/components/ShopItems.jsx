import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import "../sass/shopItemsStyles.scss";
import { usePagination } from "../custom-Hooks/Pagination";
import { FaGreaterThan } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

function ShopItems({ data }) {
  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    if (searchParam.get("page") === null) {
      searchParam.set("page", "1");
      setSearchParam(searchParam);
    }
  }, [searchParam, setSearchParam]);

  const currPage = Number(searchParam.get("page"));

  const range = usePagination({
    totalCount: data.length, //total number of items
    pageSize: 12, //number of items to display on one page
    currentPage: currPage, //current page
    siblings: 1,
  });

  let totalPages = Math.ceil(data.length / 12);

  // slice the array based on the currPage
  data = data.slice((currPage - 1) * 12, currPage * 12);

  return (
    <section className="shop-items__section">
      <div className="items__container">
        {data.map((item, index) => {
          return <ProductCard item={item} key={index} />;
        })}
      </div>
      {/* let's make the pagination pill/bar */}
      <div className="pagination-pill">
        <button
          className="next-page-btn"
          onClick={() => {
            setSearchParam({ page: currPage - 1 });
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
                setSearchParam({ page: e.target.innerText });
              }}
            >
              {item}
            </button>
          );
        })}
        <button
          className="next-page-btn"
          onClick={() => {
            setSearchParam({ page: currPage + 1 });

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
