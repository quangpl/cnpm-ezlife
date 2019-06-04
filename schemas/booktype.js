const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookTypeSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        enum: [],
        //Sách chỉ có thể loại trong các thể loại định trước
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = BookTypeSchema;
    