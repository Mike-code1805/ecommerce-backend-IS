import { Router } from "express";
import { verifyUser } from "../product/middlewares/verifyUser";
import {
  createCartController,
  getAllCartsUserController,
  getCartsController,
} from "./controllers/cartControllers";

const cartRouter: Router = Router();

cartRouter
  .route("")
  .post(verifyUser, createCartController)
  .get(getCartsController);

cartRouter.route("/mycart").get(verifyUser, getAllCartsUserController);

export default cartRouter;
