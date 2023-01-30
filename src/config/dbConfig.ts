import mongoose from "mongoose";

export const createDbConnection = (dbUrl: string) => {
  mongoose
    .connect(dbUrl)
    .then(() => console.log("Connection established"))
    .catch(() => console.log("Error on connection"));
  mongoose.connection.on("open", () => console.log("DB connected"));
  mongoose.connection.once("error", () =>
    console.log("Error on connection opening")
  );
};
