import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      index: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema, "Users");
