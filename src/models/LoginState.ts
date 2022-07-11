import { UserModel } from "./LoginForm";

export interface LoginState {
  isLoggedIn: boolean;
  currentUser: UserModel | null;
}
