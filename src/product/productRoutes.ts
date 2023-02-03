import { Router } from "express";
import { bodyReqValidator } from "../shared/validators/bodyReqValidator";
import { createProductController } from "./controllers/controllers";
import { productValidationSchema } from "./middlewares/productValidation";

const productRouter: Router = Router();

productRouter
  .route("")
  .post(bodyReqValidator(productValidationSchema), createProductController);

export default productRouter;
