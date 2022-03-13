import express from "express";
const usersRouter = express.Router();
import {
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/usersControllers.js";

// Routes
usersRouter.get("/:id", getUserById); //accessable by admin & user only

usersRouter.get("/", getUsers); //accessable by admin only

usersRouter.put("/:id", updateUser); //accessable by admin only

usersRouter.delete("/:id", deleteUser); //accessable by admin only

export default usersRouter;
