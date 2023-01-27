import { createDbConnection } from "./config/dbConfig";
import app from "./app";

createDbConnection();

app.listen(5000, () => console.log("listening on port 5000"));

// app.get("/user", (req, res) => {
//   console.log("My route is here");
// });

//
