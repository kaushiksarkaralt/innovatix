import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",");
console.log("Allowed Origins:", process.env.MONGO_URI);
const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Health Check Route
import { ApiResponse } from "./utils/ApiResponse.js";

app.get("/healthCheck", (_, res) => {
  res.status(200).json(new ApiResponse(200, {}, "Server is up and running!"));
});

//Routes Import
import { userRouter } from "./routes/user.routes.js";

//Routes Definition
app.use("/api/users", userRouter);

// Error Handler
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
app.use(errorHandler);

export { app };
