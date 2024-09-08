import mongoose from "mongoose";
import validator from "validator";

export const userSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    dob: {
        type: Date,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(val){
            if(!validator.isEmail(val))
                throw new Error('email illagel');
        }
    },
    hash: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    },
    signUpDate: {
        type: Date,
    },
    lastLoginDate: {
        type: Date
    }
});

export const User = mongoose.model('User', userSchema);