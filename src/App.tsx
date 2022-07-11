import { AppRouter } from "./routes/AppRouter";
import { FunctionComponent } from "react";
import GlobalStyle from "./styles/globalStyles";
import { Provider } from "react-redux";
import React from "react";
import store from "./stores/store";

export const App: FunctionComponent = () => {
  console.log(process.env.REACT_APP_WIZE_STORE_API_KEY);

  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppRouter />
    </Provider>
  );
};
