const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DebtReportSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    customerId: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    // Báo cáo tháng nào, năm nào.
    firstDebt: {
        type: Number,
        required: true
    },
    lastDebt: {
        type: Number,
        required: true
    },
    incurredDebt: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = DebtReportSchema;