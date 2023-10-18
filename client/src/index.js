import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-besio5tqfkhynfhb.us.auth0.com"
    clientId="Ew2bAtMIOkF5RB7K3A8oHO0ubErWCEKh"
    authorizationParams={{
      redirect_uri: "http://localhost:3000/",
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
