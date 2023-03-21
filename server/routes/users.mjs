import express from "express";
import User from "../models/users.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("get here");
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    console.log("here");
    res.status(500).send(err);
  }
});

// // Get a list of 50 posts
// router.get("/", async (req, res) => {
//   let collection = await db.collection("posts");
//   let results = await collection.find({})
//     .limit(50)
//     .toArray();

//   res.send(results).status(200);
// });

// // Fetches the latest posts
// router.get("/latest", async (req, res) => {
//   let collection = await db.collection("posts");
//   let results = await collection.aggregate([
//     {"$project": {"author": 1, "title": 1, "tags": 1, "date": 1}},
//     {"$sort": {"date": -1}},
//     {"$limit": 3}
//   ]).toArray();
//   res.send(results).status(200);
// });

export default router;
