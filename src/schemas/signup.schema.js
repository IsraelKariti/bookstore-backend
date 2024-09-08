import * as yup from 'yup'
import YupPassword from 'yup-password'
YupPassword(yup) // extend yup

export const signupSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().password().required()
    // .min(8,'password must be at least 8 characters')
    // // .matches('/[A-Z]/', 'password must contain upper case letters')
    // .matches('/[a-z]/', 'password must contain lower case letters')
    // .matches('/\d/', 'password must contain digits')
    // .matches('[@$!%*?&]', 'password must contain special characters')
    // .required()
});