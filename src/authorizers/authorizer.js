import jwt from 'jsonwebtoken';
import { ok, forbidden } from '../utils/response.js';
import dotenv from 'dotenv';
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

export const authenticateToken = (req, res, next)=>{
    const authHeader = req.headers.auth;
    const token = authHeader.split(' ')[1];
    try{
        const decodedToken = jwt.verify(token, SECRET_KEY);
        //req.decodedToken = decodedToken;
        req.user = {
            email: decodedToken.email,
            isAdmin: decodedToken.isAdmin
        }
        next();
    }
    catch(e){
        forbidden(res, 'token is not valid');
    }
}
export const authorizeAdmin = (req, res, next)=>{
    if(req.user.isAdmin == null)
        forbidden(res, 'only admins can access');
    else
       next();
}