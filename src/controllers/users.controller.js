import { createUserInDB, getUserFromDB, updateUserInDB, removeUserInDB } from "../services/users.service.js";
import { ok, created, serverError } from "../utils/response.js";

export const getUser = async (req, res)=>{
    try{ 
        const user = await getUserFromDB(req.user.email);
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
    const email = req.body.user.email;
    const updatedUserDetails = req.body.user;

    try{
        await updateUserInDB(email, updatedUserDetails);
        ok(res);
    }
    catch(e){
        serverError(res, e.message);
    }
}

export const deleteUser = async(req, res)=>{
    const id = req.user.id;

    try{
        await removeUserInDB(id);
        ok(res, 'User deleted successfully');
    }
    catch(e){
        serverError(res, e.message);
    }
}