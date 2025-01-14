import { Bar, FlexContainer, Links } from "../styles/components/Header.styles";
import { CART, FAVORITES, HOME, LOGIN, PRODUCTS } from "../data/Constants";

import { ProductSearchBar } from "./ProductSearchBar/ProductSearchBar";
import React from "react";
import { useLogin } from "../hooks/useLogin";

export const Header: React.FC = () => {
  const { loginState, logoutHandler } = useLogin();

  const { isLoggedIn, currentUser } = loginState;

  if (!isLoggedIn) {
    return (
      <Bar className="topnav" id="myTopnav">
        <Links to={HOME}>Wizestore</Links>
      </Bar>
    );
  }

  return (
    <Bar className="topnav" id="myTopnav">
      <Links to={HOME}>Wizestore Hi, {currentUser?.username}</Links>
      <FlexContainer>
        <ProductSearchBar />

        <Links to={FAVORITES}>Favorites</Links>
        <Links to={PRODUCTS}>Products</Links>
        <Links to={CART}>Cart</Links>

        <Links to={LOGIN} onClick={logoutHandler}>
          Logout
        </Links>
      </FlexContainer>
    </Bar>
  );
};
