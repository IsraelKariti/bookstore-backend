import { loginSchema } from "../schemas/login.schema.js";
import { badRequest } from "../utils/response.js";

export const validateLogin = (req, res, next)=>{
    const user = req.body.user;
    try{
        loginSchema.validate(user);
        next();
    }
    catch(e){
        badRequest(res, e);
    }
}