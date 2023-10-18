import React from "react";
import SectionBanner from "./SectionBanner";
import "../sass/checkoutStyles.scss";
import FooterBand from "./FooterBand.jsx";
import BillingForm from "./BillingForm";

function CheckOut() {
  return (
    <div className="container container__checkout">
      <SectionBanner title={"Checkout"} />
      <BillingForm />
      <FooterBand />
    </div>
  );
}

export default CheckOut;
