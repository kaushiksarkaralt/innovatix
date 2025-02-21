import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log(`MongoDB connected || DB HOST:${connectionInstance.connection.host}`)
  } catch (error) {
    console.error("MongoDB connection FAILED:", error);
    process.exit(1);
  }
}

export default connectDB;