import { Bar, FlexContainer, Links } from "../styles/components/Header.styles";
import { CART, HOME, LOGIN, PRODUCTS } from "../data/Constants";

import React from "react";
import { useLogin } from "../hooks/useLogin";

export const Header: React.FC = () => {
  const { loginState, logoutHandler } = useLogin();

  const { isLoggedIn, currentUser } = loginState;

  return (
    <Bar className="topnav" id="myTopnav">
      <Links to={HOME}>
        Wizestore{isLoggedIn && <span>- Hi, {currentUser?.username}</span>}
      </Links>
      <FlexContainer>
        <Links to={CART}>Cart</Links>
        <Links to={PRODUCTS}>Products</Links>
        {isLoggedIn ? (
          <Links to={LOGIN} onClick={logoutHandler}>
            Logout
          </Links>
        ) : (
          <Links to={LOGIN}>Login</Links>
        )}
      </FlexContainer>
    </Bar>
  );
};
