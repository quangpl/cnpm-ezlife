const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecruitmentSchema = new Schema({
    status: {
        type: Boolean,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = RecruitmentSchema;