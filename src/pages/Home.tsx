import { Link } from "react-router-dom";
import { Main } from "../styles/pages/Home.styles";
import { PRODUCTS } from "../data/Constants";
import React from "react";

export const HomePage: React.FC = () => {
  return (
    <Main>
      <h1>Welcome to WizeStore!</h1>
      <p>
        Browse our <Link to={PRODUCTS}>products</Link>
      </p>
    </Main>
  );
};
