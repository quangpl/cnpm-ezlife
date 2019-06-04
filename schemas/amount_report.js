const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AmountReportSchema = new Schema({
    bookId: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    // Báo cáo tháng nào, năm nào.
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