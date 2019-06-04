const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReceiptSchema = new Schema({
    customerId: {
        type: String,
        required: true
    },
    numberOfMoney: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = ReceiptSchema;