import { Setting } from "../models/settings.model.js";
import { ok, badRequest, serverError } from "../utils/response.js";
import { getSettingFromDB, setSettingInDB } from "../services/settings.service.js";

export const setSetting = (req, res)=>{
    const key = req.body.setting.key;
    const val = req.body.setting.val;
    try{
        setSettingInDB(req.body.setting);
        ok(res, 'setting saved successfully to DB');
    }
    catch(e){
        serverError(res, e);
    }
}
export const getSetting = async (req, res)=>{
    const key = req.body.setting.key;
    if(key == null)
        badRequest(res, 'There is no such setting');
    const setting = await getSettingFromDB(key);
    if(setting == null)
        badRequest(res, 'There is no such setting');
    else
        ok(res, setting);
}
