import mongoose from "mongoose";

const connectionString = process.env.ATLAS_URI || ""; 

mongoose.connection.on("connected", function() {
  console.log("Success: connected to Mongodb!")
})

mongoose.connection.on("error", function() {
  console.log("Error connecting to Mongodb. Check MONGODB_URI in .env")
})

mongoose.connect(connectionString)

let db = conn.db("Cluster0");

export default db;


