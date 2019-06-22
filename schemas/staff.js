const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StaffSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    typeId: {
        type: String,
        required: true
    },
    employedTime: {
        type: Date,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = StaffSchema;