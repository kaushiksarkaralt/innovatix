import { Router } from "express";
import { signup } from "../controllers/user.controller.js";
// import { authMiddleware } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.route("/signup").post(signup);

export {userRouter}