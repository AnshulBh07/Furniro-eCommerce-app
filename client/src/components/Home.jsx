import React from "react";
import "../sass/homeStyles.scss";
import Banner from "./Banner";
import BrowseRange from "./BrowseRange";
import MiniStore from "./MiniStore";
import Collage from "./Collage";
import FooterBand from "./FooterBand";

function Home({ data }) {
  return (
    <div className="container container__home">
      <Banner />
      <BrowseRange />
      <MiniStore data={data} />
      <Collage />
      <FooterBand />
    </div>
  );
}

export default Home;
