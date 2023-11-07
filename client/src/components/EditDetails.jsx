import React from "react";
import "../sass/editDetailsStyles.scss";
import { AiFillCloseSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import DetailsForm from "./DetailsForm";

function EditDetails() {
  const dispatch = useDispatch();
  const { showEditDetails } = useSelector((store) => store.profile);

  return (
    <div className="container__user-details">
      <div className="container__bg"></div>

      <div
        className={`container__main ${showEditDetails ? "modal-active" : ""}`}
      >
        <button
          className="btn-close-edit"
          onClick={() => dispatch({ type: "profile/edit_details" })}
        >
          <AiFillCloseSquare className="close-icon" />
        </button>
        <div className="details-form">
          <DetailsForm />
        </div>
      </div>
    </div>
  );
}

export default EditDetails;
