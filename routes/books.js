import express from "express";
import {
  addBook,
  deleteBook,
  getBookById,
  getBooks,
  updateBook,
} from "../controllers/booksControllers.js";
const booksRouter = express.Router();

// Routes
booksRouter.get("/:id", getBookById);

booksRouter.get("/", getBooks);

booksRouter.post("/", addBook);

booksRouter.put("/:id", updateBook);

booksRouter.delete("/:id", deleteBook);

export default booksRouter;
