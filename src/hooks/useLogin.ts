import { GenericObject, LoginForm, UserModel } from "../models/LoginForm";
import { login, logout } from "../stores/features/LoginSlice";

import { LOGIN } from "../data/Constants";
import loginApi from "../utils/loginApi";
import { useAppState } from "./useAppState";
import { useHistory } from "react-router-dom";
import { useMessages } from "../components/Common/Messages/useMessages";
import { useState } from "react";

export const useLogin = () => {
  const { loginState, dispatch } = useAppState();

  const { addErrorMessage, addSuccessMessage } = useMessages();

  const [form, setForm] = useState<LoginForm>({
    username: "",
    password: "",
    errors: null,
  });

  const history = useHistory();

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
    history.push(LOGIN);
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
        addSuccessMessage(`Welcome ${response.username}`);
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
      loginHandler();
    }
  };

  return {
    form,
    onChange,
    loginHandler,
    loginState,
    handleKeyDown,
    logoutHandler,
  };
};
