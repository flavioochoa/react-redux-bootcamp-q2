import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { CartPage } from "../pages/Cart";
import { Header } from "../components/Header";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { ProductsPage } from "../pages/Products";
import React from "react";
import { SecuredRoute } from "./SecureRoute";
import { useLogin } from "../hooks/useLogin";

export const AppRouter = () => {
  const { loginState } = useLogin();

  const renderSecuredRoute = (Component: React.FC) => {
    return (
      <SecuredRoute isLoggedIn={loginState.isLoggedIn}>
        <Component />
      </SecuredRoute>
    );
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" render={() => renderSecuredRoute(HomePage)} />
        <Route
          exact
          path="/products"
          render={() => renderSecuredRoute(ProductsPage)}
        />
        <Route exact path="/cart" render={() => renderSecuredRoute(CartPage)} />
        <Route path="/login">
          <LoginPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
