import { Router } from "express";
import { userLoginController } from "./controllers";

const authRouter: Router = Router();

authRouter.post("/api/auth/login", userLoginController);

export default authRouter;
