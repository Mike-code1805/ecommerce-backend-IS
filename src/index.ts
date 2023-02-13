import { createDbConnection } from "./config/dbConfig";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.STRIPE_SECRET_KEY);
createDbConnection(process.env.URI_MONGO || "");

console.log("process.env.PORT ->", process.env.PORT);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`));

// app.get("/user", (req, res) => {
//   console.log("My route is here");
// });

//
