import React, { useState } from "react";
import "../sass/addressFormStyles.scss";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { IoHome } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { BsCheckSquareFill } from "react-icons/bs";
import { addNewAddress } from "../services/addUserAddress";

function AddressForm() {
  const dispatch = useDispatch();
  const { user_id } = useSelector((store) => store.login);

  const [inputs, setInputs] = useState({
    username: "",
    mobile: "",
    zipcode: "",
    address_line1: "",
    address_line2: "",
    country: "",
    state: "",
    city: "",
    type: "",
    use_default: false,
    user_id: user_id,
  });
  const [locationId, setLocationId] = useState([0, 0, 0]); //country,state,city

  function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setInputs({ ...inputs, username: value });
        break;
      case "mobile":
        setInputs({ ...inputs, mobile: value });
        break;
      case "zipcode":
        setInputs({ ...inputs, zipcode: value });
        break;
      case "address1":
        setInputs({ ...inputs, address_line1: value });
        break;
      case "address2":
        setInputs({ ...inputs, address_line2: value });
        break;
      case "address-type":
        setInputs({ ...inputs, type: value });
        break;
      default:
        setInputs(inputs);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await addNewAddress(inputs);
    dispatch({ type: "profile/add_address" });
    window.location.reload(false);
  }

  return (
    <form action="" className="form__address" onSubmit={handleSubmit}>
      <div className="address-form__first-part">
        <h1>add new address</h1>
        <hr />
      </div>

      <div className="address-form__second-part">
        <label htmlFor="name">
          <span>name</span>
          <input
            type="text"
            name="name"
            id="name"
            className="input-field"
            placeholder="your name"
            value={inputs.username}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="mobile">
          <span>mobile number</span>
          <input
            type="text"
            name="mobile"
            id="mobile"
            className="input-field"
            placeholder="your phone number"
            value={inputs.mobile}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="address1">
          <span>address line 1</span>
          <input
            type="text"
            name="address1"
            id="address1"
            className="input-field"
            placeholder="address line 1"
            value={inputs.address_line1}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="address2">
          <span>address line 2</span>
          <input
            type="text"
            name="address2"
            id="address2"
            className="input-field"
            placeholder="address line 2"
            value={inputs.address_line2}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="country">
          <span>country</span>
          <CountrySelect
            placeHolder="select country"
            className="selector"
            onChange={(e) => {
              setLocationId([e.id, locationId[1], locationId[2]]);
              setInputs({ ...inputs, country: e.name });
            }}
          />
        </label>

        <label htmlFor="state">
          <span>state</span>
          <StateSelect
            countryid={locationId[0]}
            placeHolder="select state"
            className="selector"
            onChange={(e) => {
              setLocationId([locationId[0], e.id, locationId[2]]);
              setInputs({ ...inputs, state: e.name });
            }}
          />
        </label>

        <label htmlFor="city">
          <span>city</span>
          <CitySelect
            countryid={locationId[0]}
            stateid={locationId[1]}
            placeHolder="select city"
            className="selector"
            onChange={(e) => {
              setLocationId([locationId[0], locationId[1], e.id]);
              setInputs({ ...inputs, city: e.name });
            }}
          />
        </label>

        <label htmlFor="zipcode">
          <span>pin code</span>
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            className="input-field"
            placeholder="pin code"
            value={inputs.zipcode}
            onChange={handleChange}
          />
        </label>

        <div className="type-of-address">
          <span>type of address</span>

          <div className="types-list">
            <label htmlFor="work">
              <input
                type="radio"
                name="address-type"
                id="work"
                value={"work"}
                className="address-type-field"
                onChange={handleChange}
              />
              <span>
                <MdWork className="icon" />
                work
              </span>
            </label>

            <label htmlFor="home">
              <input
                type="radio"
                name="address-type"
                id="home"
                value={"home"}
                className="address-type-field"
                onChange={handleChange}
              />
              <span>
                <IoHome className="icon" />
                home
              </span>
            </label>
          </div>
        </div>

        <label htmlFor="use-default" className="use-default-option">
          <input
            type="checkbox"
            name="use-default"
            id="use-default"
            className="mark-default"
            onChange={(e) =>
              setInputs({ ...inputs, use_default: e.target.checked })
            }
          />
          <BsCheckSquareFill className="checkmark" />
          <span className="text">use as default address?</span>
        </label>
      </div>

      <div className="address-form__third-part">
        <button
          className="btn-cancel"
          name="cancel"
          onClick={() => dispatch({ type: "prodile/add_address" })}
        >
          cancel
        </button>
        <button className="btn-save-address" name="save" onClick={handleSubmit}>
          save
        </button>
      </div>
    </form>
  );
}

export default AddressForm;
