import React from "react";
import "../sass/myOrdersStyles.scss";
import { FiSearch } from "react-icons/fi";
import Budgie from "../assets/images/Pudgy-budgie.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function MyOrders() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="container__orders">
      <div className="heading-orders">
        <h1>all orders (0)</h1>
        <div className="orders-search-bar">
          <input
            type="text"
            className="search-orders"
            placeholder="Search Order Id or Product Name"
          />
          <button className="btn-search-orders">
            <FiSearch className="search-icon" />
          </button>
        </div>
      </div>

      <div className="container__no-orders">
        <p>oh no!</p>
        <p>nothing to see here</p>
        <img src={`${Budgie}`} alt="budgie" />
        <button
          className="btn-continue-shopping"
          onClick={() => navigate("/shop")}
        >
          continue shopping
        </button>
      </div>
    </div>
  );
}

export default MyOrders;
