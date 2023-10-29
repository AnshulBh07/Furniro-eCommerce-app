import React from "react";
import SectionBanner from "./SectionBanner";
import FilterBand from "./FilterBand";
import "../sass/shopStyles.scss";
import FooterBand from "./FooterBand";
import ShopItems from "./ShopItems";
import Spinner from "./Spinner";
import { useQuery } from "@tanstack/react-query";
import { getCardData } from "../services/ProductCardData";

function Shop() {
  const { data, isLoading } = useQuery({
    queryKey: ["card data"],
    queryFn: getCardData,
  });
  return (
    <div className="container container__shop">
      {/* will have different sections as well */}
      <SectionBanner title={`Shop`} />
      <FilterBand />
      {isLoading ? <Spinner /> : <ShopItems data={data} />}
      <FooterBand />
    </div>
  );
}

export default Shop;
