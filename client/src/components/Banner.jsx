import React from "react";
import BannerImg from "../assets/images/banner-img.jpg";
import "../sass/bannerStyles.scss";

function Banner() {
  return (
    <section className="banner">
      <img src={`${BannerImg}`} alt="banner-img" />
      <div className="new-arrival">
        <p>New Arrival</p>
        <h2>
          discover our new <span>collection</span>
        </h2>
        <p>Stunning kitchen chairs with exquisite looks.</p>
        <button className="btn buy-now">Buy Now</button>
      </div>
    </section>
  );
}

export default Banner;
