import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  getInnovationComments,
  getProjectComments,
  createInnovationComment,
  createProjectComment,
} from "../controllers/comment.controller.js";

const commentRouter = Router();

// Authentication required for all routes below
commentRouter.use(verifyJWT);

// Routes
commentRouter.route("/get/i/:id").get(getInnovationComments);
commentRouter.route("/get/p/:id").get(getProjectComments);
commentRouter.route("/create/i/:id").post(createInnovationComment);
commentRouter.route("/create/p/:id").post(createProjectComment);

export { commentRouter };
