import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "yup";
import { ApplicationError } from "../../customErrors/AplicationError";

export const bodyReqValidator =
  (schema: ObjectSchema<any>) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    try {
      await schema.validate({ body: req.body, params: req.params });
      next();
    } catch (error: any) {
      next(new ApplicationError(400, error.message));
    }
  };
