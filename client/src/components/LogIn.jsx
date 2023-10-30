import React, { useRef, useState } from "react";
import "../sass/logInStyles.scss";
import LoginImage from "../assets/images/bgImage6.jpg";
import LampImage from "../assets/images/lamp.png";
import Logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogo from "../assets/images/googleLogo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";

function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pwdRef = useRef(null);
  const [input, setInput] = useState({ email: "", pwd: "" });
  const { loginWithRedirect } = useAuth0();

  function handleLogInClick() {
    dispatch({ type: "header/show" });
    navigate("/");
  }

  return (
    <div className="container container__login">
      <div className="image-part">
        <img src={`${LoginImage}`} alt="login-img" />
      </div>

      <div className="login-form">
        <div className="brand">
          <h2>furniro</h2>
          <img src={`${Logo}`} alt="logo-img" />
        </div>

        <h1>log into your account</h1>
        <p>
          check you order status, update your billing info, and revview past
          purchases.
        </p>

        <div className="inputs">
          <div className="input-field">
            <label htmlFor="email">enter email</label>
            <input
              type="text"
              name="email"
              value={input.email}
              id="email"
              onChange={(e) => {
                setInput({ ...input, email: e.target.value });
              }}
              placeholder="xyz@gmail.com"
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">enter password</label>
            <div className="pwd">
              <input
                type="password"
                name="password"
                value={input.pwd}
                id="password"
                ref={pwdRef}
                onChange={(e) => {
                  setInput({ ...input, pwd: e.target.value });
                }}
              />
            </div>
          </div>
        </div>

        <Link to="#">forgot password?</Link>

        <button className="btn-login" onClick={handleLogInClick}>
          log in
        </button>

        <p>
          Don't have an account?{" "}
          <span>
            <Link to="/signUp">sign up</Link>
          </span>
        </p>

        <hr className="dividor" />

        <button className="google-btn" onClick={() => loginWithRedirect()}>
          <img
            src={`${GoogleLogo}`}
            alt="google-logo"
            className="google-logo"
          />
          <p>Sign in with google</p>
        </button>
      </div>

      <img src={`${LampImage}`} alt="lamp-img1" className="lamp1" />
      <img src={`${LampImage}`} alt="lamp-img2" className="lamp2" />
    </div>
  );
}

export default LogIn;
