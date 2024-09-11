import { badRequest } from "../utils/response.js"
import { settingSchema } from "../schemas/setting.schema.js";

export const validateSetting = async (req, res, next)=>{
    const setting = req.body.setting;
    try{
        await settingSchema.validate(setting);
        next();
    }
    catch(e){
        badRequest(res, 'invalid setting format');
    }
}