import { Router } from "express";
import { bodyReqValidator } from "../shared/validators/bodyReqValidator";
import {
  createProductController,
  getAllProductController,
  updateProductController,
  deleteProductController,
  getProductByIdController,
} from "./controllers/controllers";
import { productValidationSchema } from "./middlewares/productValidation";
import { verifyAdmin } from "./middlewares/verifyAdmin";

const productRouter: Router = Router();

productRouter
  .route("")
  .post(
    verifyAdmin,
    bodyReqValidator(productValidationSchema),
    createProductController
  )
  .get(getAllProductController);

productRouter
  .route("/:id")
  .get(getProductByIdController)
  .put(verifyAdmin, updateProductController)
  .delete(verifyAdmin, deleteProductController);

export default productRouter;
