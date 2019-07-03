const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SettingSchema = new Schema({
    nameId: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
}, {
        timestamps: true,
        versionKey: false
    });

module.exports = SettingSchema;