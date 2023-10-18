import React from "react";
import {
  navItems,
  policyItems,
  paymentOptions,
  socialMedia,
} from "../resources/links";
import "../sass/footerStyles.scss";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer>
      <div className="footer-div">
        {/* brand info */}
        <div className="info">
          <div className="brand-info">
            <h2>Furniro.</h2>
            <p>
              400 university drive suite 200 coral gables,{" "}
              <span>FL 3314, USA</span>
            </p>
          </div>

          {/* NAV LINKS */}
          <div className="links">
            <p>Links</p>
            <ul>
              {navItems.map((item, index) => {
                return (
                  <a href={item.link} key={index}>
                    {item.name}
                  </a>
                );
              })}
            </ul>
          </div>

          {/* Help */}
          <div className="policies">
            <p>Help</p>
            <ul>
              {policyItems.map((item, index) => {
                return (
                  <a href={item.link} key={index}>
                    {item.name}
                  </a>
                );
              })}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="newsletter">
            <p>Newsletter</p>
            <div className="subscribe">
              <input type="text" placeholder="Enter your email address." />
              <button>subscribe</button>
            </div>
          </div>
        </div>

        <hr />

        <div className="logos-options">
          <div className="payment-methods">
            <h2>we accept</h2>
            <div className="container__logos">
              {paymentOptions.map((item, index) => {
                return <img src={`${item}`} alt="payment-icon" key={index} />;
              })}
            </div>
          </div>

          <div className="follow-us">
            <h2>like what you see? follow us here</h2>
            <div className="container__logos">
              {socialMedia.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`social-btn ${item.name}`}
                    onClick={() => navigate(`${item.link}`)}
                  >
                    <img src={`${item.icon}`} alt="media-icon" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <hr />

        <div className="copyright">
          Furniro 2023 @Anshul Bhardwaj, All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
