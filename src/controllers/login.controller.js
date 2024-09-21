import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { compareHash } from '../utils/encryption.js';
import { badRequest, ok } from '../utils/response.js';
import { getUserFromDB } from '../services/users.service.js';

dotenv.config();

export const login = async (req, res, next)=>{
    const email = req.body.user.email;
    const password = req.body.user.password;

    const isPasswordCorrect = await compareHash(res, email, password);
    if(!isPasswordCorrect){
        badRequest(res, 'wrong password');
        return;
    }

    const userDetails = await getUserFromDB(email);

    const payload = {
        email,
        isAdmin: userDetails.isAdmin
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    ok(res, {token});    
}