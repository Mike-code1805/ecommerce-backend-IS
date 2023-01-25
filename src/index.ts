import express, { Application } from "express";

const app: Application = express();

app.listen(5000, () => console.log("listening on port 5000"));

app.get("/user", (req, res) => {
  console.log("My route is here");
});
