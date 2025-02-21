import connectDB from "./db/db.js";
import { app } from "./app.js";
import { PORT } from "./constants.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });


connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  });
