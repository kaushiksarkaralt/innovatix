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

// test
app.get("/", (req, res) => {
  res.send("Hello World");
});

export { app };
