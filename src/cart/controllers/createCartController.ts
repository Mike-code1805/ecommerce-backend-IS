import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../customErrors/AplicationError";
import { CartModel } from "../entity/CardModel";

export const createCartController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cart = new CartModel(req.body);

    const response = await cart.save();
    res.status(200).json(response);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
