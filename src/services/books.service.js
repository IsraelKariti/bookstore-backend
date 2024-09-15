import mongoose from 'mongoose';
import { Book } from '../models/books.model.js';

export const getBookFromDB = async (bookId)=>{
    const book = await Book.findById(bookId);
    return book;
}

export const getAllBooksFromDB = async ()=>{
    const books = await Book.find({});
    return books;
}

export const getBookPagesByRangeFromDB = async (minPageIndex, maxPageIndex, pageSize)=>{
    const numPages = maxPageIndex - minPageIndex + 1;
    const numBooks = numPages * pageSize;
    const toSkip = (minPageIndex-1) * pageSize;
    try{
        const books = await Book.find({}).skip(toSkip).limit(numBooks);
        return books;
    }
    catch(e){
        console.log(e);
    }
}

export const createBookInDB = async (bookInfo)=>{
    const newBook = await new Book(bookInfo).save();
    return newBook;
}

export const editBookInDB = async (bookId, bookInfo)=>{
    const updatedBook = await Book.findOneAndUpdate({_id:bookId}, bookInfo, {new: true});
    return updatedBook;
}

export const deleteBookInDB = async (bookId)=>{
    await Book.findByIdAndDelete(bookId);
}