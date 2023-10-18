import React from "react";
import { GoTrophy, GoGift } from "react-icons/go";
import { LuShieldCheck } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import "../sass/footerBandStyles.scss";

function FooterBand() {
  return (
    <section className="footer-band__section">
      <div className="features">
        <div className="service">
          <div className="icon-div">
            <GoTrophy className="icon" />
          </div>
          <div className="info">
            <h2>High Quality</h2>
            <p>Crafted from top materials.</p>
          </div>
        </div>

        <div className="service">
          <div className="icon-div">
            <LuShieldCheck className="icon" />
          </div>
          <div className="info">
            <h2>Warranty Protection</h2>
            <p>Over 2 years</p>
          </div>
        </div>

        <div className="service">
          <div className="icon-div">
            <GoGift className="icon" />
          </div>
          <div className="info">
            <h2>Free Delivery</h2>
            <p>Order over 150$</p>
          </div>
        </div>

        <div className="service">
          <div className="icon-div">
            <BiSupport className="icon" />
          </div>
          <div className="info">
            <h2>24 / 7 Support</h2>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterBand;
