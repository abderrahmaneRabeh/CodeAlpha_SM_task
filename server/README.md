import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";

User.insertMany(users);
Post.insertMany(posts);
