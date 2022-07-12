import { AppRouter } from "./routes/AppRouter";
import { FunctionComponent } from "react";
import GlobalStyle from "./styles/globalStyles";
import { Messages } from "./components/Common/Messages/Messages";
import { Provider } from "react-redux";
import React from "react";
import store from "./stores/store";

export const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppRouter />
      <Messages />
    </Provider>
  );
};
