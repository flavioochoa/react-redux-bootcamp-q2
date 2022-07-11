import { GenericObject, LoginForm, UserModel } from "../models/LoginForm";
import { login, logout } from "../stores/features/LoginSlice";

import loginApi from "../utils/loginApi";
import { useAppState } from "./useAppState";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const useLogin = () => {
  const { loginState, dispatch } = useAppState();

  const [form, setForm] = useState<LoginForm>({
    username: "",
    password: "",
    errors: null,
  });

  const [loginError, setLoginError] = useState<boolean>(false);

  const history = useHistory();

  const close = () => {
    setLoginError(false);
  };

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

  const loginAction = (user: UserModel) => {
    dispatch(login(user));
  };

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/login");
  };

  const loginHandler = async () => {
    const errors = validateFields(form);
    if (!errors) {
      setForm({ ...form, errors });
      const { username, password } = form;

      try {
        const response = await loginApi(username, password);
        loginAction(response);
        history.push("/home");
      } catch (error) {
        console.log(error);
        setLoginError(true);
      }
    } else {
      setForm({ ...form, errors });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      loginHandler();
    }
  };

  return {
    form,
    onChange,
    loginHandler,
    loginError,
    close,
    loginState,
    handleKeyDown,
    logoutHandler,
  };
};
