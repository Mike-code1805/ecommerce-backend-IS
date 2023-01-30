import { model } from "mongoose";
import { User } from "./user";
import { userSchema } from "./userSchema";

export const UserModel = model<User>("User", userSchema);
