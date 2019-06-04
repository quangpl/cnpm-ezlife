const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BillSchema = new Schema({
    customerId: {
        type: Schema.ObjectId,
        required: true
    },
    employeeId: {
        type: Schema.ObjectId,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    books: {
        type: [{
            _id: {
                type: Schema.ObjectId,
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