import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  createInnovation,
  getAllInnovations,
  getInnovationByID,
  getInnovationByText,
  updateInnovation,
} from "../controllers/innovation.controller.js";

const innovationRouter = Router();

// Authentication required for all routes below
innovationRouter.use(verifyJWT);

// Routes
innovationRouter.route("/").post(createInnovation).get(getAllInnovations);
innovationRouter.route("/:id").get(getInnovationByID).patch(updateInnovation);
innovationRouter.route("/search").post(getInnovationByText);

export { innovationRouter };
