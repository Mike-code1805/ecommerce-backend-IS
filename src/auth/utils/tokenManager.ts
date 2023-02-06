import jwt from "jsonwebtoken";

export const createTokenUser = (payload: {}, secret?: string) => {
  return jwt.sign(payload, `${process.env.JWT_AUTH_SECRET}${secret}`);
};

export const validateTokenUser = (token: any, secret?: string) => {
  return jwt.verify(token, `${process.env.JWT_AUTH_SECRET}${secret}`);
};
