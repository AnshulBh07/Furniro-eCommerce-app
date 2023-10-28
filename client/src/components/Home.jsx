import React from "react";
import "../sass/homeStyles.scss";
import Banner from "./Banner";
import BrowseRange from "./BrowseRange";
import MiniStore from "./MiniStore";
import Collage from "./Collage";
import FooterBand from "./FooterBand";
import Spinner from "./Spinner";

function Home({ data, isLoading }) {
  return (
    <div className="container container__home">
      <Banner />
      <BrowseRange />
      {isLoading ? <Spinner /> : <MiniStore data={data} />}
      <Collage />
      <FooterBand />
    </div>
  );
}

export default Home;
