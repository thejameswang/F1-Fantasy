import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import Racer from "./racer.mjs";
import Team from "./teams.mjs";

const raceSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  qualificationDate: Date,
  raceDate: Date,
  Results: {
    firstQuali: Racer,
    secondQuali: Racer,
    thirdQuali: Racer,
    fourthQuali: Racer,
    fifthQuali: Racer,
    first: Racer,
    second: Racer,
    third: Racer,
    fourth: Racer,
    fifth: Racer,
    pity: Racer,
    fastest: Racer,
    totalDnf: Number,
    bestRookie: Racer,
    bestTeam: {
      type: Team,
    },
  },
});

export default mongoose.model("Race", raceSchema, "Races");
