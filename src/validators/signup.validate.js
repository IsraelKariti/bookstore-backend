import { login } from "../controllers/login.controller.js";
import { signupSchema } from "../schemas/signup.schema.js";
import { badRequest } from "../utils/response.js";

export const validateSignup = async (req, res, next)=>{
    try{
        await signupSchema.validate(req.body.user);
        next();
    }
    catch(e)
    {
        console.log('validation is embarassing!!!!');
        
        badRequest(res, e);
    }
}