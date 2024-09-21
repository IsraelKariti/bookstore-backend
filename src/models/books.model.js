import mongoose from "mongoose";

export const bookShcema = mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        min: 0
    },
    imgPath: {
        type: String
    },
    summary: {
        type: String
    },
    review: {
        type: String
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
});

export const Book = mongoose.model('Book', bookShcema);
