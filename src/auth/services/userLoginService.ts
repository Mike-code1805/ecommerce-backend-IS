import { UserLogin } from "../../user/entity/user";
import { UserModel } from "../../user/entity/UserModel";
import { validatePassword } from "../utils/passwordManager";
import { createTokenUser } from "../utils/tokenManager";

export const userLoginService = async (userReq: UserLogin) => {
  try {
    const { email, password } = userReq;
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    const validated = await validatePassword(password, user!.password);

    if (!validated) {
      throw new Error("Password is invalid");
    }

    const token = createTokenUser({ id: user.id }, "123456789");

    return { user, token };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
