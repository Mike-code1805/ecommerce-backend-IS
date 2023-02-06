export interface User {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  gender: string;
  termsCond: boolean;
  role: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
