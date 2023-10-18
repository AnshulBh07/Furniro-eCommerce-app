import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { AiTwotonePhone } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";
import "../sass/contactInfo.scss";

function ContactInfo() {
  return (
    <div className="container__contact-info">
      <div className="info-layout">
        <div className="icn">
          <FaLocationDot className="icon" />
        </div>
        <div className="text">
          <h3>Address</h3>
          <p>236th 5th SE Avenue, New</p>
          <p>York NY100000, United States</p>
        </div>
      </div>

      <div className="info-layout">
        <div className="icn">
          <AiTwotonePhone className="icon" />
        </div>
        <div className="text">
          <h3>Phone</h3>
          <p>Hotline: +(84) 456-6789</p>
          <p>Mobile: +(84) 546-6789</p>
        </div>
      </div>

      <div className="info-layout">
        <div className="icn">
          <MdWatchLater className="icon" />
        </div>
        <div className="text">
          <h3>Working Time</h3>
          <p>Monday - Friday: 9:00 - 22:00</p>
          <p>Saturday - Sunday: 9:00 - 21:00</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
