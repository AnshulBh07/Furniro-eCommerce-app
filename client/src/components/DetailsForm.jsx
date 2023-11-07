import React, { useState } from "react";
import "../sass/detailsFormStyles.scss";
import { useSelector } from "react-redux";
import { updateUser } from "../services/addDetails";

function DetailsForm() {
  const { fName, lName, email, user_id } = useSelector((store) => store.login);
  const [inputs, setInputs] = useState({
    username: `${fName} ${fName !== lName ? lName : ""}`,
    mobile: "",
    dob: "",
    company: "",
    bio: "",
    email: email,
    user_id: user_id,
  });

  function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setInputs({ ...inputs, username: value });
        break;
      case "mobile":
        setInputs({ ...inputs, mobile: value });
        break;
      case "dob":
        setInputs({ ...inputs, dob: value });
        break;
      case "company":
        setInputs({ ...inputs, company: value });
        break;
      case "bio":
        setInputs({ ...inputs, bio: value });
        break;
      default:
        setInputs(inputs);
        break;
    }
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    const response = await updateUser(inputs);
    console.log(response);
  }

  return (
    <form action="" className="form__edit-details" onSubmit={handleOnSubmit}>
      <div className="first-half">
        <h1>edit details</h1>
        <hr />

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
            placeholder="your mobile"
            value={inputs.mobile}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          <span>email ID</span>
          <input
            type="text"
            name="email"
            id="email"
            className="input-field"
            placeholder="your email"
            value={email}
            disabled
          />
        </label>

        <label htmlFor="dob">
          <span>date of birth</span>
          <input
            type="date"
            name="dob"
            id="dob"
            className="input-field"
            value={inputs.dob}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="company">
          <span>company (optional)</span>
          <input
            type="text"
            name="company"
            id="company"
            className="input-field"
            placeholder="current company"
            value={inputs.company}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="bio">
          <span>bio (optional)</span>
          <input
            type="text"
            name="bio"
            id="bio"
            className="input-field"
            placeholder="write something about yourself"
            value={inputs.bio}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="second-half">
        <button className="btn-form-save" onClick={handleOnSubmit}>
          save
        </button>
      </div>
    </form>
  );
}

export default DetailsForm;
