export interface User {
  id: UserId;
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

export interface UserId {
  _id: Types.ObjectId;
}
