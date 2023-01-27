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
      required: true,
    },
    gender: {
      type: Boolean,
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
