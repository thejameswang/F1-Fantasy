import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const predictionSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      index: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Prediction", predictionSchema, "Predictions");
