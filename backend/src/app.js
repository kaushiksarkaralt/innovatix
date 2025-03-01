import express from "express";
import http from "http";
import { Server } from "socket.io";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

//Function Imports
import { ApiResponse } from "./utils/ApiResponse.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";

const app = express();
const server = http.createServer(app);

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",");
console.log("Allowed Origins:", process.env.MONGO_URI);
const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

// Socket.io
const io = initializeSocket(server);

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
import { projectRouter } from "./routes/project.routes.js";
import { likeRouter } from "./routes/like.routes.js";
import { commentRouter } from "./routes/comment.routes.js";
import { replyRouter } from "./routes/reply.routes.js";
import { initializeSocket } from "./socket/socket.js";

//Routes Definition
app.use("/api/users", userRouter);
app.use("/api/innovations", innovationRouter);
app.use("/api/projects", projectRouter);
app.use("/api/likes", likeRouter);
app.use("/api/comments", commentRouter);
app.use("/api/replies", replyRouter);

// Error Handler
app.use(errorHandler);

export { app, server, io };
