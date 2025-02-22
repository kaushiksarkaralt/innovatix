import { Router } from "express";
import { signup, login } from "../controllers/user.controller.js";
// import { authMiddleware } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.route("/signup").post(signup);
userRouter.route("/login").post(login);

export {userRouter}