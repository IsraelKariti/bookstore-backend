import {object, string, number} from 'yup';

export const bookSchema = object({
    title: string(),
    author: string(),
    price: number().min(0),
    imgPath: string(),
    summary: string(),
    review: string(),
    rating: number().min(1).max(5),
});