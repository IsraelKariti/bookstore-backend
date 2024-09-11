import dotenv from 'dotenv';
import { ok, badRequest } from '../utils/response.js';
import jwt from 'jsonwebtoken';

dotenv.config();
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const SECRET_KEY = process.env.SECRET_KEY;

export const authenticateUser = (req, res, next)=>{
    const authHeader = req.headers['auth'];
    if(authHeader == null || !authHeader.startsWith('Bearer '))
        badRequest(res, 'access deined');
    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = {
            email: decoded.email,
            id: decoded.id,
            isAdmin: decoded.isAdmin
        }
        next();
    }
    catch(e){
        badRequest(res, 'access denied');
    }
}

export const authenticateAdmin = (req, res)=>{
    const authHeader = req.headers['auth'];
    if(authHeader == null || !authHeader.startsWith('Bearer '))
        badRequest(res, 'access deined');
    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = {
            email: decoded.email,
            id: decoded.id,
            isAdmin: decoded.isAdmin
        }
        if(!decoded.isAdmin)
            badRequest(res, 'access denied');

        next();
    }
    catch(e){
        badRequest(res, 'access denied');
    }
}