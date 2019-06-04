const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ConditionSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = ConditionSchema;