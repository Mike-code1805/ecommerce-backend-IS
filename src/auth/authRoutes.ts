import { Router } from "express";
import { verifyUser } from "../product/middlewares/verifyUser";
import { bodyReqValidator } from "../shared/validators/bodyReqValidator";
import { userLoginController, userRegisterController, validateUserController } from "./controllers";
import {
  loginUserSchema,
  registerUserSchema,
} from "./middlewares/authValidation";

const authRouter: Router = Router();

authRouter
  .route("/login")
  .post(bodyReqValidator(loginUserSchema), userLoginController);
authRouter
  .route("/register")
  .post(bodyReqValidator(registerUserSchema), userRegisterController);

authRouter.route("/validate").post(verifyUser, validateUserController);
export default authRouter;
