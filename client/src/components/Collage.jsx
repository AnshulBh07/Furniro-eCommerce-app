import React from "react";
import "../sass/collageStyles.scss";
import CollageImg from "../assets/images/Collage.png";

function Collage() {
  return (
    <section className="share-yours">
      <img src={`${CollageImg}`} alt="collage" />
      <div className="title">
        <p>Share your setup with</p>
        <h1>#FurniroFurniture</h1>
      </div>
    </section>
  );
}

export default Collage;
