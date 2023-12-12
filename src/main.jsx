import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Context from "./Context/Context.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Auth0Provider
      domain="{dev-f0gjcszhbvzuj21w.us.auth0.com}"
      clientId="{sw47GtmrlOEIsYmTM7wVl7b6lBF9HDzR}"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Context>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Context>
    </Auth0Provider>
);
