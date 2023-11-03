import React from "react";
import SectionBanner from "./SectionBanner";
import "../sass/checkoutStyles.scss";
import FooterBand from "./FooterBand.jsx";
import BillingForm from "./BillingForm";
import { useEffect } from "react";

function CheckOut() {
  useEffect(() => {
    window.scrollTo(100, 100);
  }, []);

  return (
    <div className="container container__checkout">
      <SectionBanner title={"Checkout"} />
      <BillingForm />
      <FooterBand />
    </div>
  );
}

export default CheckOut;
