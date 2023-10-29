import React from "react";
import "../sass/favouritesStyles.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import FavCard from "./FavCard";

function Favourites({ setFavourites }) {
  const favItems = useSelector((store) => store.favourites.favs);
  console.log(favItems);

  return (
    <div className="favourites__container">
      <h2>
        Favourites
        <button
          className="btn-close-favourites"
          onClick={() => setFavourites(false)}
        >
          <AiOutlineClose className="icon" />
        </button>
      </h2>

      <hr />

      <div className="items">
        {favItems.map((item, index) => {
          return <FavCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Favourites;
