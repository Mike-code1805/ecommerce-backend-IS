import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../customErrors/AplicationError";
import { deleteCartService } from "../services";

export const deleteCartController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const resp = await deleteCartService(req.params.id, req.body.owner);
    res.status(200).json({ deleted: resp });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
