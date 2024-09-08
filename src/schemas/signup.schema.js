import * as yup from 'yup'
import YupPassword from 'yup-password'
YupPassword(yup) // extend yup

export const signupSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().password().required()
});