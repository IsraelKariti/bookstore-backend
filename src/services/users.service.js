import mongoose from "mongoose";
import { User } from "../models/users.model.js";

export const getUserFromDB = async (email)=>{
    const userDocument = await User.findOne({
        email
    });
    if(userDocument == null)
        return null;
    const user = userDocument._doc;
    user.hash = undefined;
    return user;
}

export const createUserInDB = async (user)=>{
    const createdUser = await new User(user).save();
    return createdUser._doc._id;
}

export const updateUserInDB = async (email, user)=>{
    await User.findOneAndUpdate({email}, user);
}

export const removeUserInDB = async (id)=>{
    await User.findByIdAndDelete(id);
}

export const getHashForUser = async (email)=>{
    const userDocument = await User.findOne({
        email
    });
    if(userDocument == null)
        return null;
    const hash = userDocument._doc.hash;
    return hash;
}