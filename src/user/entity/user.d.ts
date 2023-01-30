export interface User {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  gender: string;
  termsCond: boolean;
}

export interface UserLogin {
  email: string;
  password: string;
}
