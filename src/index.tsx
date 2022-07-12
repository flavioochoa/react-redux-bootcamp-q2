import { App } from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { CALLBACK } from "./data/Constants";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Auth0Provider
    domain="dev-5yt2hs8z.us.auth0.com"
    clientId="ZcWcEK4oI5wDRXGvM8sbg19J0pQAjUBG"
    redirectUri={`${window.location.origin}${CALLBACK}`}
  >
    <App />
  </Auth0Provider>
);
