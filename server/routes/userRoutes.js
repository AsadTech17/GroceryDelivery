import express from "express";
import { register } from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/register", register);
// userRouter.post("/login", login);
// userRouter.get("/is-auth", authUser, isAuth);
// userRouter.get("/logout", authUser, logout);

export default userRouter;
