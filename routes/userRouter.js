import Router from "express";
import authMiddleware from "../middlewares/authMiddlewares.js";
import { adminMiddleware } from "../middlewares/adminMiddlewares.js";
import {
  createUser,
  getAllUsers,
  getAUser,
  updateUser,
  deleteUser,
} from "../controllers/userApis/barrel.js";
const userRouter = Router();
userRouter
  .post("/user/create", createUser)
  // public
  .get("/users", authMiddleware, adminMiddleware, getAllUsers)
  .get("/user/:id", authMiddleware, adminMiddleware, getAUser)
  .put("/user/update/:id", authMiddleware, adminMiddleware, updateUser)
  .delete("/user/delete/:id", authMiddleware, adminMiddleware, deleteUser);
export default userRouter;
