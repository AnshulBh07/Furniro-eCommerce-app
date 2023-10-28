import React from "react";
import "../sass/spinnerStyles.scss";

function Spinner() {
  return (
    <section className="spinner__section">
      <div className="container__spinner">
        <div className="circle-left"></div>
        <div className="circle-mid"></div>
        <div className="circle-right"></div>
      </div>
    </section>
  );
}

export default Spinner;
