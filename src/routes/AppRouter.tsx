import {
  CART,
  FAVORITES,
  HOME,
  LOGIN,
  ORDER_COMPLETE,
  PRODUCTS,
} from "../data/Constants";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { CartPage } from "../pages/Cart";
import { FavoritesPage } from "../pages/Favorites";
import { Header } from "../components/Header";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { OrderFullfilledPage } from "../pages/OrderFullfilled";
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
        <Route exact path={HOME} render={() => renderSecuredRoute(HomePage)} />
        <Route
          exact
          path={PRODUCTS}
          render={() => renderSecuredRoute(ProductsPage)}
        />
        <Route exact path={CART} render={() => renderSecuredRoute(CartPage)} />
        <Route
          exact
          path={ORDER_COMPLETE}
          render={() => renderSecuredRoute(OrderFullfilledPage)}
        />
        <Route
          exact
          path={FAVORITES}
          render={() => renderSecuredRoute(FavoritesPage)}
        />
        <Route path={LOGIN}>
          <LoginPage />
        </Route>
        <Redirect to={HOME} />
      </Switch>
    </Router>
  );
};
