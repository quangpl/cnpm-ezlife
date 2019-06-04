const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    type: {
        type: {
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        required: true
    },
    employedTime: {
        type: Date,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = EmployeeSchema;