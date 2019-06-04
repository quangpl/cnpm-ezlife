const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ConditionSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = ConditionSchema;