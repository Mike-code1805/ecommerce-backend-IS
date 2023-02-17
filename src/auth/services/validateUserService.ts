import { UserModel } from "../../user/entity/UserModel";
import { createTokenUser } from "../utils/tokenManager";

export const validateUserService = async (idUser: string) => {
  try {
    const user = await UserModel.findOne({ _id: idUser });
    if (!user) {
      throw new Error("User not found");
    }

    const token = createTokenUser({ id: user.id });

    return { user, token };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
