import { Router } from "express";
import { getBook, getAllBooks,getBookCount, getBooksByRange, createBook, editBook, deleteBook } from "../controllers/books.controller.js";
import { authenticateAdmin } from "../authenticators/user.authenticator.js";
import {validateBook} from '../validators/book.validate.js';

export const router = Router();

router.get('/book/:id', getBook);
router.get('/all', getAllBooks);
router.get('/range', getBooksByRange);
router.get('/count', getBookCount);

router.use(authenticateAdmin);

router.post('/create', validateBook, createBook);
router.put('/:id', validateBook, editBook);
router.delete('/:id', deleteBook);