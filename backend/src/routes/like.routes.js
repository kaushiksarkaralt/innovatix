import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  toggleInnovationLike,
  toggleProjectLike,
} from "../controllers/like.controller.js";

const likeRouter = Router();

// Authentication required for all routes below
likeRouter.use(verifyJWT);

// Routes
likeRouter.route("/toggle/i/:id").post(toggleInnovationLike);
likeRouter.route("/toggle/p/:id").post(toggleProjectLike);
// TODO toggle comment like

export { likeRouter };
