const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookTypeSchema = new Schema({
        _id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey:
            false
    }
    )
;

module.exports = BookTypeSchema;