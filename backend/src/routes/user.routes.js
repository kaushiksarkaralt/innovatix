import { Router } from "express";
import { signup, login, getUser, logout } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.route("/signup").post(signup);
userRouter.route("/login").post(login);

// Authentication required for all routes below
userRouter.use(verifyJWT);

userRouter.route("/getUser").get(getUser);
userRouter.route("/logout").get(logout);

export { userRouter };
