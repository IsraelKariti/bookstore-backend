import {object, string, mixed} from 'yup';

export const settingSchema = object({
    key: string().required(),
    value: mixed().required(),
})