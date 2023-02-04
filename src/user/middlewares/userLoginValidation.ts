import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../customErrors/AplicationError";
import { UserLogin } from "../entity/user";

export const userLoginValidation = async (
  req: Request<{}, {}, UserLogin>,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.email) {
    next(new ApplicationError(400, "Email is required", "Validation"));
  }
  if (!req.body.password) {
    next(new Error("Password is required"));
  }
  next();
};
