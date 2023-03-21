import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: [
      "Ferrari",
      "Mercedes",
      "RedBull",
      "AlphaTauri",
      "Haas",
      "Mclaren",
      "Aston Martin",
      "Alfa Romeo",
      "Alpine",
      "Williams",
    ],
    unique: true,
  },
});

export default mongoose.model("Team", teamSchema, "Teams");
