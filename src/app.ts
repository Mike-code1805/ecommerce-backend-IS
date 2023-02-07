import express, {
  Application,
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import authRouter from "./auth/authRoutes";
import cartRouter from "./cart/cartRoutes";
import { ApplicationError } from "./customErrors/AplicationError";
import productRouter from "./product/productRoutes";

const app: Application = express();

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

app.use(
  (err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
    res
      .status(err.statusCode ? err.statusCode : 500)
      .send({ message: err.message, type: err.errorType });
  }
);

export default app;
