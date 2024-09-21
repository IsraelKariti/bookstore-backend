import { bookSchema } from "../schemas/books.schema.js";

export const validateBook = (req, res, next)=>{
    try{
        bookSchema.validate(req.body);
        next();
    }
    catch(e){
        res.status(400).send(e);
    }
}