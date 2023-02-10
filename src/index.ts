import { createDbConnection } from "./config/dbConfig";
import app from "./app";
import dotenv from "dotenv";
const stripe = require("stripe")('sk_test_51MZysYCTwDOIsdwTcsM98EBFLY7oUxpSJfiWB1rCkz9uYH53SVcnS0HEaqKLpCbHAS5Pwm0jTgR7IEVYG4bEuJaC00jUtnVCdg');

dotenv.config();

createDbConnection(process.env.URI_MONGO || "");

const calculateOrderAmount = (items: any) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

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
});

console.log("process.env.PORT ->", process.env.PORT);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`));

// app.get("/user", (req, res) => {
//   console.log("My route is here");
// });

//
