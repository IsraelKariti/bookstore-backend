import mongoose from "mongoose";

const settingSchema = mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true,
    },
    value: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
});

export const Setting = mongoose.model('Setting', settingSchema);