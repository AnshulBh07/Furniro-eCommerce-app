import React, { useEffect, useState } from "react";
import "../sass/productPageStyles.scss";
import FooterBand from "./FooterBand.jsx";
import { useSearchParams } from "react-router-dom";
import { getProductDetails } from "../services/productDetails";
import ProductMainInfo from "./ProductMainInfo";
import { getRelatedProducts } from "../services/relatedProducts";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";
import { useQuery } from "@tanstack/react-query";

function ProductPage() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [category, setCategory] = useState("");

  const sku = searchParam.get("sku");
  console.log(sku);

  //whenever you are fecthing data always use isLaoding because fetching is asynchronous in nature
  //therefore an undefined result is rendered at first before the data is completely fetched
  //to manage that undefined use isLoading
  // useEffect(() => {
  //   async function fecthProductDetails() {
  //     const result = await getProductDetails(sku);
  //     if (result && result.length > 0) {
  //       setIsLoading(false);
  //       setProductDetail(result[0]);
  //       setCategory(result[0].category);
  //     } else {
  //       setIsLoading(true);
  //     }
  //   }

  //   fecthProductDetails();
  // }, [sku]);

  const { data, isLoading } = useQuery({
    queryKey: [`product details for ${sku}`],
    queryFn: () => getProductDetails(sku),
  });

  //effect to scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    !isLoading && setCategory(data.category);
  }, [data, isLoading]);

  //to fetch related products
  useEffect(() => {
    const fetchRelatedItems = async () => {
      const result = await getRelatedProducts(category, sku);
      if (result && result.length > 0) {
        setRelatedProducts(result);
      }
    };

    fetchRelatedItems();
  }, [category, sku]);

  return (
    <div className="container product__container">
      {/* header */}
      <section className="product-header">
        <div className="path-container">
          <p>Home</p>
          <h3>{`>`}</h3>
          <p>shop</p>
          <h3>{`>`}</h3>
          <div className="separator"></div>
          <h3>{!isLoading && data.title}</h3>
        </div>
      </section>

      {/* main description */}
      {isLoading ? <Spinner /> : <ProductMainInfo details={data} />}

      {/* extra information */}

      {/* related products */}
      <section className="related-products__section">
        <h1>related products</h1>
        <div className="products-list">
          {relatedProducts.map((item) => {
            return (
              <ProductCard
                item={item}
                key={item.sku}
                setSearchParam={setSearchParam}
              />
            );
          })}
        </div>
        <button className="show-more-btn">show more</button>
      </section>

      <FooterBand />
    </div>
  );
}

export default ProductPage;
