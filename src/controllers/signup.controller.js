import { encrypt } from '../utils/encryption.js';
import { createUserInDB, getUserFromDB } from '../services/users.service.js';
import { serverError, ok, badRequest } from '../utils/response.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const signup = async (req, res, next)=>{
    const email = req.body.user.email;

    //1. check if this email exists
    const userFromDB = await getUserFromDB(email);
    if(userFromDB != null && userFromDB.length > 0){
        badRequest(res, 'Email already exist');
    }
     
    // create hash for password
    const password = req.body.user.password;
    const hash = await encrypt(password);

    // create a token
    try{
        const newUserID = await createUserInDB({email, hash, isAdmin:false});
        const payload = {
            email,
            isAdmin: false,
        };
        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '7d' });
        ok(res, {token});
    }
    catch(e){
        serverError(res,e);
    }
}