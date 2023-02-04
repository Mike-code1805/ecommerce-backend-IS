import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../customErrors/AplicationError";
import { Product } from "../entity/product";
import { ProductModel } from "../entity/ProductModel";

export const createProductController = async (
  req: Request<{}, {}, Product>,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = new ProductModel(req.body);
    const response = await product.save();
    res.status(200).json(response);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
