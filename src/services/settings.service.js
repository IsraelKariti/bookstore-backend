import { Setting } from "../models/settings.model.js";

export const setSettingInDB = (setting)=>{
    new Setting(setting).save();
}
export const getSettingFromDB = async (key)=>{
    const setting = await Setting.findOne({key})
    return setting._doc;
}