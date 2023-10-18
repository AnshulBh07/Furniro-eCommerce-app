import React from "react";
import SectionBanner from "./SectionBanner";
import FilterBand from "./FilterBand";
import "../sass/shopStyles.scss";
import FooterBand from "./FooterBand";
import ShopItems from "./ShopItems";

function Shop({ data }) {
  return (
    <div className="container container__shop">
      {/* will have different sections as well */}
      <SectionBanner title={`Shop`} />
      <FilterBand />
      <ShopItems data={data} />
      <FooterBand />
    </div>
  );
}

export default Shop;
