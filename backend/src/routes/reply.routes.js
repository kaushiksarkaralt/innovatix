import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createReply, getReplies } from "../controllers/reply.controller.js";

const replyRouter = Router();

// Authentication required for all routes below
replyRouter.use(verifyJWT);

// Routes
replyRouter.route("/:commentID").get(getReplies).post(createReply);

export { replyRouter };
