const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReceiptSchema = new Schema({
//Ngày thu mặc định hệ thống sẽ tạo vào lúc thêm dữ liệu vào database vì vậy không cần định nghĩa trường "Ngày thu"
    id: {
        type: String,
        required: true
    },
    customerId: {
        type: String,
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
