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
    res.status(201).json(response);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};

export const getAllProductController = async (
  _req: Request<{}, {}, Product>,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await ProductModel.find();
    res.header({ head: "This is my header" });
    res.status(200).json(response);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};

export const updateProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const response = await ProductModel.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    if (response) throw new ApplicationError(401, "Product not found");
    res.status(200).json({ updated: "success" });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};

export const deleteProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const response = await ProductModel.findByIdAndDelete(id);

    if (!response) throw new ApplicationError(401, "Product not found");
    res.status(200).json({ deleted: "success" });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
