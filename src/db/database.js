import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

export const connectToMongoDB = async ()=>{
    try{ 
        await mongoose.connect(MONGO_URL);
        console.log('connected successfully to mongodb');
    }catch(e){
        console.log('failed to connect to mongodb with the error');
        console.log(e);
        process.exit(1); 
    }
}

export const disconnetFromMongoDB = async ()=>{
    mongoose.disconnect(MONGO_URL);
}