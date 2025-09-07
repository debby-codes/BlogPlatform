import { Router } from "express";
import {
  deleteBlog,
  editBlog,
  getBlogWithComments,
  readBlog,
  writeBlog,
} from "../controllers/blogApis/barrel.js";
import authMiddleware from "../middlewares/authMiddlewares.js";
import { adminMiddleware } from "../middlewares/adminMiddlewares.js";
const blogRouter = Router();
blogRouter

  .post("/write/blog", authMiddleware, writeBlog)
  .get("/readBlog", authMiddleware, readBlog)
  .get("/readBlogWC/:id", adminMiddleware, authMiddleware, getBlogWithComments)
  .put("/editBlog/:id", authMiddleware, editBlog)
  .delete("/deleteBlog/:id", authMiddleware, deleteBlog);
export default blogRouter;
