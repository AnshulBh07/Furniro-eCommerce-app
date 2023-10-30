import React from "react";
import "../sass/favouritesStyles.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import FavCard from "./FavCard";

function Favourites() {
  const dispatch = useDispatch();
  const { favs } = useSelector((store) => store.favourites);

  return (
    <div className="favourites__container">
      <h2>
        Favourites
        <button
          className="btn-close-favourites"
          onClick={() => dispatch({ type: "header/setFav" })}
        >
          <AiOutlineClose className="icon" />
        </button>
      </h2>

      <hr />

      <div className="items">
        {favs.map((item, index) => {
          return <FavCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Favourites;
