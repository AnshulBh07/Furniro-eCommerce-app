import React from "react";
import "../sass/addressSlabStyles.scss";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { showSuccesToast } from "../services/toastMessages";
import { ToastContainer } from "react-toastify";

function AddressSlab({ item }) {
  async function handleDeleteClick() {
    try {
      const response = await axios({
        method: "delete",
        url: `/api/delete_address?address_id=${item.address_id}`,
      });
      const result = response.data;
      showSuccesToast("Address Deleted!");

      setTimeout(() => {
        window.location.reload(false); //reload the page forcefully
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  }

  console.log(item.use_default);

  return (
    <>
      <div
        className="container__address-slab"
        style={
          item.use_default === true
            ? { border: "2px solid #b88e2f", borderRadius: "5px" }
            : {}
        }
      >
        <div className="address-part">
          <p className="username">{item.name}</p>
          <p className="address1">{item.address_line1}</p>
          <p className="address2">{item.address_line2}</p>
          <p className="phone">
            <span>Phone Number:</span> {item.mobile_no}
          </p>
          <div className="location">
            <p>
              <span>Country:</span> {item.country}
            </p>
            <p>
              <span>City:</span> {item.city}
            </p>
            <p>
              <span>State:</span> {item.state}
            </p>
            <p>
              <span>Zipcode:</span> {item.pin_code}
            </p>
          </div>
          <p>
            <span>Address Type:</span> {item.type}
          </p>
        </div>

        <div className="container__delete-btn">
          <button className="btn-delete-address" onClick={handleDeleteClick}>
            <FaTrashAlt className="icon" />
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default AddressSlab;
