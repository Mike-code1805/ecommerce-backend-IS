import { Schema } from "mongoose";
import { User } from "./user";

export const userSchema = new Schema<User>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordConfirmation: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
    },
    termsCond: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
