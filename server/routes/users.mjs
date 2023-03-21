import express from "express";
import User from "../models/users.mjs";

const router = express.Router();

router.get("/", (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    });
});

router.post("/createUser", (req, res) => {
  const { name } = req.body;
  User.findOne({ name }).then((user) => {
    if (user) {
      return res.status(400).json({ message: "User Already Exists" });
    }
    const newUser = new User({
      name,
    });
    newUser
      .save()
      .then(() => {
        res.status(201).json({ message: "User created successfully!" });
      })
      .catch((err) => {
        console.error(err);
      });
  });
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
