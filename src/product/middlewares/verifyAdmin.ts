import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { validateTokenUser } from "../../auth/utils/tokenManager";
import { ApplicationError } from "../../customErrors/AplicationError";
import { UserModel } from "../../user/entity/UserModel";

export const verifyAdmin = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new ApplicationError(401, "Unauthorized");
    }

    const user: string | JwtPayload | any = validateTokenUser(authorization);

    if (!user.id) {
      throw new ApplicationError(401, "Invalid user id");
    }

    const userAdmin = await UserModel.findById(user.id);

    if (!userAdmin) throw new ApplicationError(401, "User not found");

    if (userAdmin.role !== "admin")
      throw new ApplicationError(403, "You are not admin");

    next();
  } catch (error: any) {
    next(new ApplicationError(403, error.message));
  }
};
