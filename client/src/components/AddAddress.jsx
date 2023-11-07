import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import "../sass/addAddressStyles.scss";
import AddressForm from "./AddressForm";

function AddAddress() {
  const dispatch = useDispatch();
  const { showAddressEditor } = useSelector((store) => store.profile);

  return (
    <div className="container__user-addresses">
      <div className="container__bg"></div>

      <div
        className={`container__main ${showAddressEditor ? "modal-active" : ""}`}
      >
        <button
          className="btn-close-edit"
          onClick={() => dispatch({ type: "profile/add_address" })}
        >
          <AiFillCloseSquare className="close-icon" />
        </button>
        <div className="address-form">
          <AddressForm />
        </div>
      </div>
    </div>
  );
}

export default AddAddress;
