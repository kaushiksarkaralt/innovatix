import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  joinProject,
  leaveProject,
} from "../controllers/project.controller.js";

const projectRouter = Router();

// Authentication required for all routes below
projectRouter.use(verifyJWT);

// Routes
projectRouter.route("/").post(createProject).get(getAllProjects);
projectRouter
  .route("/:id")
  .get(getProjectById)
  .patch(updateProject)
  .delete(deleteProject);
projectRouter.route("/:id/join").post(joinProject);
projectRouter.route("/:id/leave").post(leaveProject);


export { projectRouter };
