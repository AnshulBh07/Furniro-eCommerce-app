import React, { useState } from "react";
import BgImage from "../assets/images/signUpImg.jpg";
import "../sass/signUpFormStyles.scss";
import { FaUser } from "react-icons/fa";
import { BiSolidLockAlt } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import GoogleLogo from "../assets/images/googleLogo.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PasswordPolicy from "./PasswordPolicy";
import axios from "axios";
import { showWarnToast } from "../services/toastMessages";
import { checkPassValidity } from "../services/checkPassword";

function SignUpform() {
  const [signUp, setSignUp] = useState({
    username: "",
    email: "",
    pwd1: "",
    pwd2: "",
  });
  const { loginWithRedirect } = useAuth0();

  async function handleSubmit(e) {
    e.preventDefault();

    if (signUp.pwd1 !== signUp.pwd2) {
      showWarnToast("Password doesn't match!");
      return;
    }

    if (checkPassValidity(signUp.pwd1)) {
      const response = await axios({
        method: "post",
        url: e.target.action,
        data: signUp,
      });

      console.log(response);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case "username":
        setSignUp({ ...signUp, username: value });
        break;
      case "email":
        setSignUp({ ...signUp, email: value });
        break;
      case "pwd":
        setSignUp({ ...signUp, pwd1: value });
        break;
      case "confirm-pwd":
        setSignUp({ ...signUp, pwd2: value });
        break;
      default:
        setSignUp(signUp);
    }
  }

  return (
    <div className="container container__sign-up">
      <div className="img-part">
        <img src={`${BgImage}`} alt="bg-image" />
      </div>
      <div className="form-part">
        <form
          action="http://localhost:3001/signUp_form"
          className="signUp-form"
          method="post"
          onSubmit={handleSubmit}
        >
          <h1>get started</h1>
          <label htmlFor="username">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={signUp.username}
              onChange={handleChange}
            />
            <span>
              <FaUser className="icon" />
            </span>
          </label>

          <label htmlFor="email">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              onChange={handleChange}
              value={signUp.email}
            />
            <span>
              <GrMail className="icon" />
            </span>
          </label>

          <label htmlFor="pwd">
            <input
              type="password"
              name="pwd"
              id="pwd"
              placeholder="password"
              onChange={handleChange}
              value={signUp.pwd1}
            />
            <span>
              <BiSolidLockAlt className="icon" />
            </span>

            <PasswordPolicy />
          </label>

          <label htmlFor="confirm-pwd">
            <input
              type="password"
              name="confirm-pwd"
              id="confirm-pwd"
              placeholder="confirm password"
              onChange={handleChange}
              value={signUp.pwd2}
            />
            <span>
              <BiSolidLockAlt className="icon" />
            </span>
          </label>

          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Log In</Link>
            </span>
          </p>

          <button type="submit" className="btn-signUp">
            Sign Up
          </button>

          <div className="separator">
            <span>or</span>
          </div>

          <button className="google-btn" onClick={() => loginWithRedirect()}>
            <img
              src={`${GoogleLogo}`}
              alt="google-logo"
              className="google-logo"
            />
            <p>Continue with google</p>
          </button>
        </form>
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
    </div>
  );
}

export default SignUpform;
