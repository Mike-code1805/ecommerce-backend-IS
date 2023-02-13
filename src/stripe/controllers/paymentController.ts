import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const key = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(`${key}`);

const calculateOrderAmount = (items: any) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1000;
};

// app.post("/create-payment-intent", async (req, res) => {});

export const paymentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Im here now");
  const { items } = req.body;
  console.log({ items });
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};
