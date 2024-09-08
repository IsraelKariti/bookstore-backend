import { createUserSchema } from "../schemas/users.schema.js";
import { badRequest } from "../utils/response.js";

export const validateCreateUser = async (req, res, next)=>{
    try{
        await createUserSchema.validate(req);
        console.log('validation of new user passed successfully');
        next();
    }
    catch(e){
        console.log('failed to validate the data, this will not be forwared to the DB'); 
        console.log(e);
        badRequest(res, e.message);
    }
}