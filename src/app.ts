import express, {
  Application,
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import authRouter from "./auth/authRoutes";
import { ApplicationError } from "./customErrors/AplicationError";

const app: Application = express();

app.use(express.json());

app.use(authRouter);

app.use(
  (err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
    res
      .status(err.statusCode ? err.statusCode : 500)
      .send({ message: err.message, type: err.errorType });
  }
);

export default app;
