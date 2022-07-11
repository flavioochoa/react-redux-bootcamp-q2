export interface LoginForm {
  username: string;
  password: string;
  errors: GenericObject | null;
}

export type GenericObject = {
  [key: string]: any;
};

export interface UserModel {
  id: string;
  username: string;
}
