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
    books: {
        type: [{
            _id: {
                type: String,
                required: true
            },
            unitPrice: {
                type: Number,
                required: true
            },
            amount: {
                type: Number,
                require: true
            }
        }],
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = BillSchema;