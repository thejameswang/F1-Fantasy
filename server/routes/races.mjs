import express from "express";
import raceData from "../data/races.mjs";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(raceData);
});

export default router;
