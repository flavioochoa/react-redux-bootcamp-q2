import { Redirect } from "react-router-dom";
import { WithChildren } from "./RoutesInterfaces";

export const SecuredRoute: React.FC<WithChildren> = ({
  isLoggedIn,
  children,
}) => {
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }
  return <>{children}</>;
};
