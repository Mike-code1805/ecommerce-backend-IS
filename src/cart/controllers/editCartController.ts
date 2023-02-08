import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../customErrors/AplicationError";
import { editCartService } from "../services";

export const editCartController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const resp = await editCartService(req.params.id, req.body);
    res.status(200).json({ edited: resp });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
