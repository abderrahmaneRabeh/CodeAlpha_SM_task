import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/post.js";
import { verfyToken } from "../middleware/auth.js";
const postRouter = express.Router();

postRouter.get("/", verfyToken, getFeedPosts);
postRouter.get("/:userId/posts", verfyToken, getUserPosts);
postRouter.patch("/:id/like", verfyToken, likePost);

export default postRouter;
