import mongoose from "mongoose";

export const createDbConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://mikecode:iGAUkbbiKZxhJY7g@cluster0.vazberk.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connection established"))
    .catch(() => console.log("Error on connection"));
  mongoose.connection.on("open", () => console.log("DB connected"));
  mongoose.connection.once("error", () =>
    console.log("Error on connection opening")
  );
};
