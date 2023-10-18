import React from "react";
import SectionBanner from "./SectionBanner";
import "../sass/contactStyles.scss";
import GetInTouch from "./GetInTouch";

function Contact() {
  return (
    <div className="container container__contact">
      <SectionBanner title={"Contact"} />
      <GetInTouch />
    </div>
  );
}

export default Contact;
