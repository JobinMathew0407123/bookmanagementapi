import express from "express";
import {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
 
} from "../controllers/book.js";
import loginMiddleware from "../middlewares/middlewares.js"
const router = express.Router();
//Getting Details of all books
router.get("/",loginMiddleware,getBooks);
//Getting Details of Books by id
router.get("/:id",loginMiddleware,getBookById);
//Adding books
router.post("/", loginMiddleware,addBook);
//updating books by Id
router.put("/:id",loginMiddleware,updateBook);
//deleting books by Id
router.delete("/:id",loginMiddleware,deleteBook);

export default router;
