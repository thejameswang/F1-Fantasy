import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import users from "./routes/users.mjs";
import races from "./routes/races.mjs";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectionString = process.env.ATLAS_URI || "";
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connection.on("connected", function () {
  console.log("Success: connected to Mongodb!");
});

mongoose.connection.on("error", function (err) {
  console.log("Error connecting to Mongodb. Check MONGODB_URI in .env");
  console.log(err);
  process.exit(1);
});
console.log(connectionString);
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "F1",
});

// Load the /posts routes
app.use("/api/users", users);
app.use("/api/races", races);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.");
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
