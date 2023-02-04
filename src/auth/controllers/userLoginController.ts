import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../customErrors/AplicationError";
import { User, UserLogin } from "../../user/entity/user";
import { UserModel } from "../../user/entity/UserModel";
import { validatePassword } from "../utils/passwordManager";

export const userLoginController = async (
  req: Request<{}, {}, UserLogin>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      next(new ApplicationError(400, "User not found"));
    }

    const validated = await validatePassword(password, user!.password);

    if (!validated) {
      next(new ApplicationError(401, "Password is invalid"));
    }
    res.status(200).send(user);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
