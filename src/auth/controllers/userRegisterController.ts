import { NextFunction, Request, Response } from "express";
import { User } from "../../user/entity/user";
import { UserModel } from "../../user/entity/UserModel";
import { userLoginService } from "../services/userLoginService";
import { encrypPassword } from "../utils/passwordManager";
import { validateTokenUser } from "../utils/tokenManager";

export const userRegisterController = async (
  req: Request<{}, {}, User>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, email, gender, termsCond } = req.body;

    const password = await encrypPassword(req.body.password);

    const newUser = new UserModel({
      username,
      email,
      password,
      gender,
      termsCond,
    });
    // const validation = validateTokenUser(
    //   req.headers.authorization,
    //   "123456789"
    // );

    await newUser.save();

    const user = await userLoginService(req.body);

    res.status(201).json(user);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};
