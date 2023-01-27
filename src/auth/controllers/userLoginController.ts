import { NextFunction, Request, Response } from "express";

export const userLoginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    res.status(201).json(req.body.user);
  } catch (error) {}
};
