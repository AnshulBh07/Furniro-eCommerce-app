import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import "../sass/profileSubmenuStyles.scss";
import { useDispatch } from "react-redux";

function ProfileSubmenu() {
  const dispatch = useDispatch();
  const { isAuthenticated, logout, user } = useAuth0();
  const navigate = useNavigate();

  return (
    <div className="container__profileSubmenu">
      {!isAuthenticated ? (
        <div className="container__logged-out">
          <p>welcome!</p>
          <button
            className="btn-header-login"
            onClick={() => {
              navigate("/login");
              dispatch({ type: "header/show" });
              dispatch({ type: "header/showProfileSubmenu" });
            }}
          >
            log in
          </button>
        </div>
      ) : (
        <div className="container__logged-in">
          <p>Hello, {user.given_name}!</p>
          <Link to={"#"}>my profile</Link>
          <Link to={"#"}>my orders</Link>
          <button
            className="btn-header-logout"
            onClick={() => {
              logout();
              dispatch({ type: "header/showProfileSubmenu" });
            }}
          >
            log out
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileSubmenu;
