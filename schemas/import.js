const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImportSchema = new Schema({
    bookId: {
        type: String,
        required: true
    },
    bookTypeId: {
        type: String,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        require: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = ImportSchema;