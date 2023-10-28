import React, { useEffect, useState } from "react";
import "../sass/favouritesStyles.scss";
import { AiOutlineClose } from "react-icons/ai";

function Favourites({ setFavourites }) {
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

      <div className="items"></div>
    </div>
  );
}

export default Favourites;
