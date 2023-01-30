import { Router } from "express";
import { userLoginController, userRegisterController } from "./controllers";

const authRouter: Router = Router();

authRouter.post("/api/auth/login", userLoginController);
authRouter.post("/api/auth/register", userRegisterController);

export default authRouter;
