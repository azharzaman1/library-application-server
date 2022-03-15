import express from "express";
const studentsRouter = express.Router();
import {
  getStudentById,
  getStudents,
  updateStudent,
  deleteStudent,
  addStudent,
} from "../controllers/studentsController.js";
import verifyRoles from "../middlewares/verifyRoles.js";
import { userRoles } from "../config/userRoles.js";

// Routes

// add verifyRoles(userRoles.Admin, userRoles.Admin)
// middleware to check roles before processing

studentsRouter.get("/:id", getStudentById); //accessable by admin & user only

studentsRouter.get("/", getStudents); //accessable by admin only

studentsRouter.post("/", addStudent); //accessable by admin only

studentsRouter.put("/:id", updateStudent); //accessable by admin only

studentsRouter.delete("/:id", deleteStudent); //accessable by admin only

export default studentsRouter;
