import express, { Application } from "express";
import authRouter from "./auth/authRoutes";

const app: Application = express();

app.use(express.json());

app.use(authRouter);

export default app;
