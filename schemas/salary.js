const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SalarySchema = new Schema({
    employeeId: {
        type: String,
        required: true
    },
    basicSalary: {
        type: Number,
        required: true
    },
    bonusMoney: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    },
    insurranceMoney: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = SalarySchema;
