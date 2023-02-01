import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../customErrors/AplicationError";
import { UserLogin } from "../../user/entity/user";
import { userLoginService } from "../services/userLoginService";

export const userLoginController = async (
  req: Request<{}, {}, UserLogin>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userLoginService(req.body);
    res.status(200).json(user);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
