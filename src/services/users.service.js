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
    console.log(createdUser);
    return createdUser._doc._id;
}

export const updateUserInDB = async (id, user)=>{
    await User.findByIdAndUpdate(id, user);
}