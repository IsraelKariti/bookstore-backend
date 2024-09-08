import {object, string, number, date} from 'yup';

export const createUserSchema = object({
    firstName: string(),
    lastName: string(),
    dob: date().min(new Date(2000,0,1)),
    email: string().required(),
    phone: number(),
    signUpDate: date(),
    lastLogin: date(),
})