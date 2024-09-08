import dotenv from 'dotenv';
dotenv.config();
const SECRET = process.env.SECRET_KEY;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export const login = (req, res, next)=>{
    const email = req.body.email;
    const password = req.body.password;

    var jwt = require('jsonwebtoken');
    const payload = {
        email
    };
    const token = jwt.sign(payload, SECRET_KEY);
    console.log(token);
    
}