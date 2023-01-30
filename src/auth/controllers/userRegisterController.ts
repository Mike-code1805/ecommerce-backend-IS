import { NextFunction, Request, Response } from "express";
import { User } from "../../user/entity/user";
import { UserModel } from "../../user/entity/UserModel";
import { encrypPassword } from "../utils/passwordManager";

export const userRegisterController = async (
  req: Request<{}, {}, User>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, email, gender, termsCond } = req.body;
    console.log(req.body.password);
    const password = await encrypPassword(req.body.password);
    console.log({ password });
    const newUser = new UserModel({
      username,
      email,
      password,
      gender,
      termsCond,
    });

    const userResponse = await newUser.save();
    res.status(201).json(userResponse);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};
