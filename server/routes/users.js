import express from "express";
import { verfyToken } from "../middleware/auth.js";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";

const userRouter = express.Router();

userRouter.get("/:id", verfyToken, getUser);
userRouter.get("/:id/friends", verfyToken, getUserFriends);
userRouter.patch("/:id/:friendId", verfyToken, addRemoveFriend);

export default userRouter;
