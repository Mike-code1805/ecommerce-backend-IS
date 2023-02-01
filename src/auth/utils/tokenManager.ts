import jwt from "jsonwebtoken";

export const createTokenUser = (payload: {}, secret: string) => {
  return jwt.sign(payload, secret);
};

export const validateTokenUser = (token: any, secret: string) => {
  return jwt.verify(token, secret);
};
