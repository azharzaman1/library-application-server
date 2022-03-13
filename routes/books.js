import express from "express";
import {
  deleteBook,
  getBookById,
  getBooks,
  updateBook,
} from "../controllers/booksControllers.js";
const booksRouter = express.Router();

// Routes
booksRouter.get("/:id", getBookById); //accessable by admin & user only

booksRouter.get("/", getBooks); //accessable by admin only

booksRouter.put("/:id", updateBook); //accessable by admin only

booksRouter.delete("/:id", deleteBook); //accessable by admin only

export default booksRouter;
