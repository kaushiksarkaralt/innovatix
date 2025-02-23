import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

//Function Imports
import { ApiResponse } from "./utils/ApiResponse.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";

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

app.get("/api/healthCheck", (_, res) => {
  res.status(200).json(new ApiResponse(200, {}, "Server is up and running!"));
});

//Routes Import
import { userRouter } from "./routes/user.routes.js";
import { innovationRouter } from "./routes/innovation.routes.js";

//Routes Definition
app.use("/api/users", userRouter);
app.use("/api/innovatons", innovationRouter);

// Error Handler
app.use(errorHandler);

export { app };
