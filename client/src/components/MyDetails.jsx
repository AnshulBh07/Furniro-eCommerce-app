import React from "react";
import "../sass/myDetailsStyles.scss";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../services/getUserProfile";
import { getUserAddress } from "../services/allUserAddress";
import { formatDateTime } from "../services/formatDateTime";
import AddressSlab from "./AddressSlab";

function MyDetails() {
  const dispatch = useDispatch();
  const { email, user_id } = useSelector((store) => store.login);

  // we willl fetch data here using the user_id,email of the user set in loginReducer
  const x = useQuery({
    queryKey: ["get user info"],
    queryFn: () => getUserProfile(email),
  });

  const y = useQuery({
    queryKey: ["get user addresses"],
    queryFn: () => getUserAddress(user_id),
  });

  return (
    <>
      <div className="container__details">
        <div className="container__my-details">
          <div className="heading-edit-option">
            <h1>my details</h1>
            <button
              className="btn-edit-details"
              onClick={() => dispatch({ type: "profile/edit_details" })}
            >
              edit
            </button>
          </div>
          <div className="details-name">
            <p>Name</p>
            {!x.isLoading && (
              <p>{`${x.data.first_name} ${
                x.data.first_name !== x.data.last_name ? x.data.last_name : ""
              }`}</p>
            )}
          </div>
          <div className="details-email">
            <p>Email ID</p>
            {!x.isLoading && <p>{email}</p>}
          </div>
          <div className="details-phone">
            <p>mobile number</p>
            {!x.isLoading && <p>+91-{x.data.phone}</p>}
          </div>
          <div className="details-dob">
            <p>Date of birth</p>
            {!x.isLoading && <p>{formatDateTime(x.data.dob)}</p>}
          </div>
        </div>

        <div className="container__address">
          <div className="heading-address">
            <h1>my addresses</h1>
          </div>
          <div className="addresses-list">
            {!y.isLoading &&
              y.data.map((item, index) => {
                return <AddressSlab key={index} item={item} />;
              })}
          </div>
          <div className="add-save-btns">
            <button
              className="btn-add-address"
              onClick={() => dispatch({ type: "profile/add_address" })}
            >
              add new address
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyDetails;
