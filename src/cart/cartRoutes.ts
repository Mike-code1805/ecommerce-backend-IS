import { Router } from "express";
import { verifyUser } from "../product/middlewares/verifyUser";
import {
  createCartController,
  getAllCartsController,
  getCartsUserController,
  deleteCartController,
  editCartController,
} from "./controllers";

const cartRouter: Router = Router();

cartRouter
  .route("")
  .post(verifyUser, createCartController)
  .get(getAllCartsController);

cartRouter.route("/mycart").get(verifyUser, getCartsUserController);

cartRouter
  .route("/:id")
  .delete(verifyUser, deleteCartController)
  .put(verifyUser, editCartController);

export default cartRouter;
