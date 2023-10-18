import React from "react";
import "../sass/getTouchStyles.scss";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function GetInTouch() {
  return (
    <section className="contact__section">
      <div className="contact-message">
        <h3>get in touch with us</h3>
        <p>
          for more information about our product and services, please feel free
          to drop us
        </p>
        <p>
          an email. our staff will always be there to help you out. do not
          hesitate!
        </p>
      </div>

      <div className="contact-info-form">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}

export default GetInTouch;
