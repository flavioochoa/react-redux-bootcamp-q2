import "./Login.css";

import { Button } from "../Common/Button/Button";
import React from "react";
import { TextField } from "@mui/material";
import { useLogin } from "../../hooks/useLogin";

export const Login: React.FC = () => {
  const { form, onChange, loginHandler, handleKeyDown } = useLogin();

  const { username, password, errors } = form;

  return (
    <div className="login-container" onKeyPress={handleKeyDown}>
      <div className="login-data-container">
        <div className="login-title">
          <h2>Welcome to the WizeStore!</h2>
        </div>
        <div className="width-100">
          <div className="login-username padding-10">
            <TextField
              label="Username"
              variant="outlined"
              className="width-100"
              value={username}
              onChange={onChange}
              inputProps={{ "data-key": "username" }}
              required
              error={Boolean(errors?.username)}
              helperText={errors?.username}
            />
          </div>
          <div className="login-password padding-10">
            <TextField
              label="Password"
              variant="outlined"
              className="width-100"
              value={password}
              onChange={onChange}
              inputProps={{ "data-key": "password" }}
              type="password"
              required
              error={Boolean(errors?.password)}
              helperText={errors?.password}
            />
          </div>
          <div className="login-button padding-10">
            <Button
              label="Login"
              onClick={loginHandler}
              className="width-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
