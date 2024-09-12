import {getBookFromDB, getAllBooksFromDB, createBookInDB, editBookInDB, deleteBookInDB} from '../services/books.service.js';
import { ok, created, badRequest, serverError } from '../utils/response.js';

export const getBook = async (req, res)=>{
    const bookId = req.params.id;
    try{
        const book = await getBookFromDB(bookId);
        ok(res, book);
    }
    catch(e){
        serverError(res, e);
    }
}
export const getAllBooks = async (req, res)=>{
    try{
        const books = await getAllBooksFromDB();
        ok(res, books);
    }
    catch(e){
        serverError(r);
    }
}

export const createBook = async (req, res)=>{
    const bookInfo = req.body;
    try{
        const createdBook = await createBookInDB(bookInfo);
        created(res, createdBook._doc);
    }
    catch(e){
        serverError(res, e);
    }
}

export const editBook = async (req, res)=>{
    try{
        const updatedBook = await createBookInDB(req.param.id, req.body.bookInfo);
        ok(res, updatedBook);
    }catch(e){
        serverError(res,e);
    }
}
 
export const deleteBook = async (req, res)=>{
    try{
        await deleteBookInDB(req.param.id);
        ok(res, null);
    }
    catch(e){
        serverError(res,e);
    }
}

