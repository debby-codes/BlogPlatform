import { Router } from "express";
import {
  deleteComment,
  editComment,
  readComment,
  writeComment,
} from "../controllers/commentApis/barrel.js";
import authMiddleware from "../middlewares/authMiddlewares.js";
import { adminMiddleware } from "../middlewares/adminMiddlewares.js";
const commentRouter = Router();
commentRouter

  .post("/write/comment", authMiddleware, writeComment)
  .get("/read", authMiddleware, readComment)
  .put("/edit/:id", authMiddleware, editComment)
  .delete("/delete/:id", authMiddleware, adminMiddleware, deleteComment);
export default commentRouter;
