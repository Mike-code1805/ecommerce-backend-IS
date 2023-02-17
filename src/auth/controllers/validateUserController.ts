import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../customErrors/AplicationError";
import { validateUserService } from "../services";

export const validateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await validateUserService(req.body.owner);
    res.status(200).json(user);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
