import mongoose from "mongoose";
import { User } from "../models/users.model.js";

export const getUserFromDB = async (email)=>{
    const user = await User.find({
        email
    });
    return user;
}

export const createUserInDB = async (user)=>{
    const createdUser = await new User(user).save();
    return createdUser._id;
}

export const updateUserInDB = async (id, user)=>{
    await User.findByIdAndUpdate(id, user);
}