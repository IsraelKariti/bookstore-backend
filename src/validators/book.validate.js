import { bookSchema } from "../schemas/books.schema.js";

export const validateBook = (req, res, next)=>{
    try{
        bookSchema.validate(req.body.book);
        next();
    }
    catch(e){
        res.status(400).send(e);
    }
}