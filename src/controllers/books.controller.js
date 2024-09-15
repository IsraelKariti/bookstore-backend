import {getBookFromDB, getAllBooksFromDB, getBookPagesByRangeFromDB, createBookInDB, editBookInDB, deleteBookInDB} from '../services/books.service.js';
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

export const getBooksByRange = async (req, res)=>{
    const start = Number(req.query.start);
    const end = Number(req.query.end);
    const size = Number(req.query.size);
    if(start < 1){
        badRequest(res, 'mininmum page index must equal or greater than 0');
        return;
    }
    if(start > end){
        badRequest(res, 'mininmum page index must be smaller than maximal page index');
        return;
    }

    try{
        const books = await getBookPagesByRangeFromDB(start, end, size);
        const pages = [];
        for (let i = 0; i < books.length; i += size) {
            const page = books.slice(i, i + size);
            pages.push(page);
        }
        ok(res, pages);
    }
    catch(e){
        serverError(res,e);
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

