const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ParameterSchema = new Schema({
    description: {
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

module.exports = ParameterSchema;