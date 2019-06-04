const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BillSchema = new Schema({
    customerId: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = BillSchema;