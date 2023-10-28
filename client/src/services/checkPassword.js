import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showWarnToast } from "./toastMessages";

const checkUppercase = (pwd) => {
  for (var i = 0; i < pwd.length; i++) {
    if (pwd[i] >= "A" && pwd[i] <= "Z") return true;
  }
  return false;
};

const checkLowercase = (pwd) => {
  for (var i = 0; i < pwd.length; i++) {
    if (pwd[i] >= "a" && pwd[i] <= "z") return true;
  }
  return false;
};

const checkForNumber = (pwd) => {
  for (var i = 0; i < pwd.length; i++) {
    if (pwd[i] >= "0" && pwd[i] <= "9") return true;
  }
  return false;
};

const checkSpecialChars = (pwd) => {
  const specialChars = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    "|",
    "<",
    ">",
    ".",
    "?",
    "/",
  ];

  // double for loop to check
  for (var i = 0; i < pwd.length; i++) {
    for (var j = 0; j < specialChars.length; j++) {
      if (pwd[i] === specialChars[j]) return true;
    }
  }

  return false;
};

const checkRepeatedChars = (pwd) => {
  var count = 0;

  for (var i = 1; i < pwd.length; i++) {
    if (pwd[i] === pwd[i - 1]) {
      count++;
    }

    if (count === 3) return false;
  }
  return true;
};

export const checkPassValidity = (pwd) => {
  if (pwd.length < 8) {
    showWarnToast("Password length must be atleast 8 characters.");
    return false;
  } else if (!checkLowercase(pwd)) {
    showWarnToast("Password must contain atleast one lower case letter.");
    return false;
  } else if (!checkUppercase(pwd)) {
    showWarnToast("Password must contain atleast one upper case letter.");
    return false;
  } else if (!checkForNumber(pwd)) {
    showWarnToast("Password must contain at least one number.");
    return false;
  } else if (!checkSpecialChars(pwd)) {
    showWarnToast("Password must contain atleast one special character.");
    return false;
  } else if (!checkRepeatedChars(pwd)) {
    showWarnToast(
      "Password must not contain three repeated characters in a row."
    );
    return false;
  } else {
    return true;
  }
};
