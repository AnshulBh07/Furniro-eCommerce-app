import React, { useEffect } from "react";
import SectionBanner from "./SectionBanner";
import FilterBand from "./FilterBand";
import "../sass/shopStyles.scss";
import FooterBand from "./FooterBand";
import ShopItems from "./ShopItems";
import { useSearchParams } from "react-router-dom";
import Spinner from "./Spinner";

function Shop({ data, isLoading }) {
  const [searchParam, setSearchParam] = useSearchParams();

  return (
    <div className="container container__shop">
      {/* will have different sections as well */}
      <SectionBanner title={`Shop`} />
      <FilterBand setSearchParam={setSearchParam} searchParam={searchParam} />
      {isLoading ? (
        <Spinner />
      ) : (
        <ShopItems
          data={data}
          searchParam={searchParam}
          setSearchParam={setSearchParam}
        />
      )}
      <FooterBand />
    </div>
  );
}

export default Shop;
