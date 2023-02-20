import { Router } from "express";
import { paymentController } from "./controllers";

const stripeRoutes: Router = Router();

stripeRoutes.route("").post(paymentController);

export default stripeRoutes;
