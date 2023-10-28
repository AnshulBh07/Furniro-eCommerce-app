import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import "../sass/pwdPolicyStyles.scss";

function PasswordPolicy() {
  return (
    <div className="container__policy">
      <BsInfoCircle className="policy-icon" />
      <div className="policy-rules">
        <h2>password requirements</h2>
        <p>Must contain atleast 8 characters</p>
        <p>Must contain atleast one uppercase and one lowercase alphabet</p>
        <p>Must contain atleast one number</p>
        <p>Must contain atleast one special character</p>
        <p>Must not contain three or more identical characters in a row</p>
      </div>
    </div>
  );
}

export default PasswordPolicy;
