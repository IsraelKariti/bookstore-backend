import { createUserInDB, getUserFromDB, updateUserInDB } from "../services/users.service.js";
import { ok, created, serverError } from "../utils/response.js";

export const getUser = async (req, res)=>{
    try{ 
        const user = await getUserFromDB(req.body.email);
        ok(res, user);
    }
    catch(e){
        serverError(res, e.message);
    }
}

export const createUser = async (req, res)=>{
    try{
        await createUserInDB(req.body);
        created(res);
    }
    catch(e){
        serverError(res, e.message);
    }
}

export const updateUser = async(req, res)=>{
    const id = req.user.id;
    const updatedUserDetails = req.body.user;

    try{
        await updateUserInDB(id, updatedUserDetails);
        ok(res);
    }
    catch(e){
        serverError(res, e.message);
    }
}