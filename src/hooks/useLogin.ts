import { GenericObject, LoginForm, UserModel } from "../models/LoginForm";
import { HOME, LOGIN } from "../data/Constants";
import { login, logout } from "../stores/features/LoginSlice";

import loginApi from "../utils/loginApi";
import { useAppState } from "./useAppState";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import { useMessages } from "../components/Common/Messages/useMessages";
import { useState } from "react";

export const useLogin = () => {
  const { loginState, dispatch } = useAppState();

  const {
    user,
    isAuthenticated,
    logout: auth0Logout,
    loginWithRedirect: auth0Login,
  } = useAuth0();

  const history = useHistory();

  const { addErrorMessage, addSuccessMessage } = useMessages();

  const [form, setForm] = useState<LoginForm>({
    username: "",
    password: "",
    errors: null,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.dataset.key;

    setForm((previous) => {
      return {
        ...previous,
        [key]: e.target.value,
      };
    });
  };

  const validateFields = (form: LoginForm): GenericObject | null => {
    const error: GenericObject = {};
    if (!form.username) {
      error.username = "Username required";
    }

    if (!form.password) {
      error.password = "Password required";
    }

    return Object.keys(error).length ? error : null;
  };

  const logoutHandler = () => {
    dispatch(logout());
    auth0Logout();
    history.push(LOGIN);
  };

  const redirectAfterLogin = (response: UserModel) => {
    dispatch(login(response));
    history.push(HOME);
    addSuccessMessage(`Welcome ${response.username}`);
  };

  const loginHandlerWithEmailAndPassword = async () => {
    const errors = validateFields(form);
    if (!errors) {
      setForm({ ...form, errors });
      const { username, password } = form;

      try {
        const response = await loginApi(username, password);
        redirectAfterLogin(response);
      } catch (error) {
        console.log(error);
        addErrorMessage("Username or password invalid!");
      }
    } else {
      setForm({ ...form, errors });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      loginHandlerWithEmailAndPassword();
    }
  };

  return {
    form,
    onChange,
    loginHandlerWithEmailAndPassword,
    loginState,
    handleKeyDown,
    logoutHandler,
    isAuthenticated,
    user,
    redirectAfterLogin,
    auth0Login,
  };
};
