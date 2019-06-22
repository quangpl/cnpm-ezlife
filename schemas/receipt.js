const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReceiptSchema = new Schema({
    customerId: {
        type: Schema.ObjectId,
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