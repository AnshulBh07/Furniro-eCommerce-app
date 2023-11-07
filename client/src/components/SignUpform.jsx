import React, { useState } from "react";
import BgImage from "../assets/images/signUpImg.jpg";
import "../sass/signUpFormStyles.scss";
import { FaUser } from "react-icons/fa";
import { BiSolidLockAlt } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import GoogleLogo from "../assets/images/googleLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PasswordPolicy from "./PasswordPolicy";
import { showSuccesToast, showWarnToast } from "../services/toastMessages";
import { checkPassValidity } from "../services/checkPassword";
import { getUserProfile } from "../services/getUserProfile";
import { createNewUser } from "../services/signUpUser";

function SignUpform() {
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState({
    username: "",
    email: "",
    pwd1: "",
    pwd2: "",
  });
  const { loginWithRedirect } = useAuth0();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(signUp);

    if (signUp.pwd1 !== signUp.pwd2) {
      showWarnToast("Password doesn't match!");
      return;
    }

    if (checkPassValidity(signUp.pwd1)) {
      // first we check whether the user is already present or not
      const result1 = await getUserProfile(signUp.email);
      console.log(result1);

      if (result1.length > 0) {
        //which means that the user is already present
        showWarnToast(
          "User already present. Please log in using the same email account."
        );
      } else {
        // we update the user in database
        const response = await createNewUser(signUp);
        showSuccesToast(response + "Redirecting to login page...");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
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
        <img src={`${BgImage}`} alt="bg-img" />
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
    </div>
  );
}

export default SignUpform;
