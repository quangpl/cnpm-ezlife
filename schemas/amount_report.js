const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AmountReportSchema = new Schema({
    bookId: {
        type: String,
        required: true
    },
    // Thời gian báo cáo
    time: {
        type: Date,
        required: true
    },
    firstAmount: {
        type: Number,
        required: true
    },
    lastAmount: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = AmountReportSchema;