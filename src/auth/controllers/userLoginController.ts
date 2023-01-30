import { NextFunction, Request, Response } from "express";
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
    console.log(req.body);
    const user: User | null = await UserModel.findOne({ email });
    console.log({ user });
    if (!user) {
      res.status(400).json({ message: "User not found" });
    }

    const validated = await validatePassword(password, user!.password);

    if (validated) {
      res.status(200).json(user);
    }
    res.status(401).json({ message: "Invalid" });
  } catch (error) {}
};
