import React from "react";
import "../sass/homeStyles.scss";
import Banner from "./Banner";
import BrowseRange from "./BrowseRange";
import MiniStore from "./MiniStore";
import Collage from "./Collage";
import FooterBand from "./FooterBand";
import Spinner from "./Spinner";
import { useQuery } from "@tanstack/react-query";
import { getCardData } from "../services/ProductCardData";

function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["card data"],
    queryFn: getCardData,
  });

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
