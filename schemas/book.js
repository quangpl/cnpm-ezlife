const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    typeId: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    numberOf: {
        type: Number,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = BookSchema;