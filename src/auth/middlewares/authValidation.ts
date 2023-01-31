import * as yup from "yup";

export const loginUserSchema = yup.object({
  body: yup.object({
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  }),
});
