import { Bar, FlexContainer, Links } from "../styles/components/Header.styles";

import React from "react";
import { useLogin } from "../hooks/useLogin";

export const Header: React.FC = () => {
  const { loginState, logoutHandler } = useLogin();

  const { isLoggedIn, currentUser } = loginState;

  return (
    <Bar className="topnav" id="myTopnav">
      <Links to="/">
        Wizestore{isLoggedIn && <span>- Hi, {currentUser?.username}</span>}
      </Links>
      <FlexContainer>
        <Links to="/cart">Cart</Links>
        <Links to="/products">Products</Links>
        {isLoggedIn ? (
          <Links to="/login" onClick={logoutHandler}>
            Logout
          </Links>
        ) : (
          <Links to="/login">Login</Links>
        )}
      </FlexContainer>
    </Bar>
  );
};
