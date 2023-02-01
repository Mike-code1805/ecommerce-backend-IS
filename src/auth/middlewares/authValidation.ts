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

export const registerUserSchema = yup.object({
  body: yup.object({
    username: yup.string().required("Username is required"),
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
    passwordConfirmation: yup
      .string()
      .required("Password confirmation is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    gender: yup
      .string()
      .required("Gender is required")
      .oneOf(["male", "female"], "Just like male and female"),
    termsCond: yup
      .boolean()
      .required("Terms and Conditions is required")
      .oneOf([true], "Terms and Conditions must be accepted"),
  }),
});
