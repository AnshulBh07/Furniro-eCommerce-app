import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import "../sass/profileSubmenuStyles.scss";
import { useDispatch, useSelector } from "react-redux";

function ProfileSubmenu() {
  const dispatch = useDispatch();
  const { isAuthenticated, logout, user } = useAuth0();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((store) => store.login);
  const { fName } = useSelector((store) => store.login);

  return (
    <div className="container__profileSubmenu">
      {!isAuthenticated && !isLoggedIn ? (
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
          {isAuthenticated ? (
            <p>Hello, {user.given_name}!</p>
          ) : (
            <p>Hello, {fName}!</p>
          )}
          <Link to={"#"}>my profile</Link>
          <Link to={"#"}>my orders</Link>
          <button
            className="btn-header-logout"
            onClick={() => {
              logout();
              dispatch({ type: "header/showProfileSubmenu" });
              dispatch({ type: "login/toggle" });
              dispatch({ type: "login/removeInfo" });
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
