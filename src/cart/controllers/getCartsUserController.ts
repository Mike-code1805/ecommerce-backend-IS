import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../customErrors/AplicationError";
import { CartModel } from "../entity/CardModel";

export const getCartsUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await CartModel.find({ owner: req.body.owner }).populate({
      path: "owner",
      select: "username gender",
    });
    res.status(200).json(response);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
