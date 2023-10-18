import React from "react";
import Banner from "../assets/images/sectionBanner4.jpg";
import "../sass/sectionBannerStyles.scss";
import Logo from "../assets/images/logo.png";

function SectionBanner({ title }) {
  return (
    <section className="section-banner">
      <img src={`${Banner}`} alt="sect-banner" />
      <div className="banner-title">
        <img src={`${Logo}`} alt="logo" />
        <h2>{title}</h2>
        <p>
          {`Home > `}
          <span>{title}</span>
        </p>
      </div>
    </section>
  );
}

export default SectionBanner;
