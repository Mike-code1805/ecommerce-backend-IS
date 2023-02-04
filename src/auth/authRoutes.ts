import { Router } from "express";
import { bodyReqValidator } from "../shared/validators/bodyReqValidator";
import { userLoginController, userRegisterController } from "./controllers";
import { loginUserSchema } from "./middlewares/authValidation";

const authRouter: Router = Router();

authRouter
  .route("/api/auth/login")
  .post(bodyReqValidator(loginUserSchema), userLoginController);
authRouter.route("/api/auth/register").post(userRegisterController);

export default authRouter;
