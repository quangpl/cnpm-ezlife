const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    type: {
        type: {
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        required: true
    },
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = BookSchema;