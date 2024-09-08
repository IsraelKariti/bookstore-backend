import bcrypt from 'bcrypt';
import { createUserInDB, getUserFromDB } from '../services/users.service.js';
import { serverError, ok, badRequest } from '../utils/response.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const signup = async (req, res, next)=>{
    const email = req.body.user.email;

    //1. check if this email exists
    const userFromDB = await getUserFromDB(email);
    if(userFromDB.length > 0){
        badRequest(res, 'Email already exist');
    }

    const saltRounds = 10;
    const password = req.body.user.password;
    bcrypt.hash(password, saltRounds, async function(err, hash){
        if(err!= null)
            serverError();

        try{
            const newUserID = await createUserInDB({email, hash});
            const payload = {
                email,
                id: newUserID,
                isAdmin: false,
            };
            const token = jwt.sign(payload, process.env.SECRET_KEY);
            ok(res, token);
        }
        catch(e){
            serverError(res,e)
        }
    })

    
}