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
        required: true,
        default: 0
    },
    unitPrice: {
        type: Number,
        required: true
    },
    shortDesc: {
        type: String,
        required: true
    },
    fullDesc: {
        type: String,
        required: true
    },
    image :{
        type: String,
        required: true,
        default: 'https://via.placeholder.com/600'
    },
    tag: {
        type :[String],
        required: true,
        default : ['book'],
        index:true
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = BookSchema;