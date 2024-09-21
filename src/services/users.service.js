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

const adjustBookAmountForUserInDB = async (email, bookId, delta)=>{
    const result = await User.updateOne(
        {email},// this filters the collection and retrieve a specific document
        { $inc: {"cartItems.$[elem].amount": delta}},
        {
            arrayFilters:[
                { "elem.bookId": bookId }
            ]
        }
    );
    return result;

}

export const increaseBookAmountForUserInDB = async (email, bookId)=>{
    const result = await adjustBookAmountForUserInDB(email, bookId, 1);
    if(result.modifiedCount != 1){
        await User.updateOne(
            {email},// this filters the collection and retrieve a specific document
            { $push: {"cartItems": {bookId, amount:1}}},
        );
    }
}

export const decreaseBookAmountForUserInDB = async (email, bookId)=>{
    await adjustBookAmountForUserInDB(email, bookId, -1);
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