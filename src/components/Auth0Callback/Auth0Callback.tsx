import React, { useEffect } from "react";

import { Loading } from "../Common/Loading/Loading";
import { useLogin } from "../../hooks/useLogin";

export const Auth0Callback: React.FC = () => {
  const { isAuthenticated, redirectAfterLogin, user } = useLogin();

  useEffect(() => {
    if (isAuthenticated) {
      redirectAfterLogin({ username: user.name, id: user.email });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return <Loading isLoading />;
};
