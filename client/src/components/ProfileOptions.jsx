import React from "react";
import "../sass/profileOptionsStyles.scss";
import { FaRegUser } from "react-icons/fa";
import { BsBox2 } from "react-icons/bs";
import { Outlet, useNavigate } from "react-router-dom";

function ProfileOptions() {
  const navigate = useNavigate();

  function handleInputChange(e) {
    const { id } = e.target;

    switch (id) {
      case "edit":
        navigate("/account/details");
        break;
      case "orders":
        navigate("/account/orders");
        break;
      default:
        return;
    }
  }

  return (
    <section className="section__profile-options">
      <div className="container__profile-options">
        <div className="option-btns">
          <label htmlFor="edit" className="options-label">
            <input
              type="radio"
              id="edit"
              name="profile-settings"
              className="profile-inputs edit-profile"
              onChange={handleInputChange}
              defaultChecked
            />

            <span>
              <FaRegUser className="icon" /> My Profile
            </span>
          </label>

          <label htmlFor="orders" className="options-label">
            <input
              type="radio"
              id="orders"
              name="profile-settings"
              onChange={handleInputChange}
              className="profile-inputs my-orders-list"
            />
            <span>
              <BsBox2 className="icon" /> my orders
            </span>
          </label>
        </div>

        <Outlet />
      </div>
    </section>
  );
}

export default ProfileOptions;
