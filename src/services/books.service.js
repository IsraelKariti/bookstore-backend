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
export const getBookCountInDB = async ()=>{
    const countDocuments = await Book.countDocuments();
    return countDocuments;
}
// this function uses 0-based index
export const getBooksByRangeFromDB = async (minBookIndex, maxBookIndex)=>{
    const numBooks = maxBookIndex - minBookIndex + 1;
    const toSkip = minBookIndex;
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