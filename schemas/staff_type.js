const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StaffTypeSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = StaffTypeSchema;