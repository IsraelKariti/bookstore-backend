import bcrypt from 'bcrypt';
import { serverError } from './response.js';
import { getHashForUser } from '../services/users.service.js';

export const encrypt = async (password)=>{
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
}

export const compareHash = async (res, email, password)=>{
    // load hash from db
    const hash = await getHashForUser(email);
    if(hash == null){
        serverError(res, 'Could not find hash for this email or email does not exist');
    }

    const result = await bcrypt.compare(password, hash);
    if(result == null)
        serverError(res, 'could not compare hash to password');

    // result is true or false
    return result;
}
