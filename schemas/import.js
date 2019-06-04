const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImportSchema = new Schema({
    //Ngày nhập mặc định hệ thống sẽ tạo vào lúc thêm dữ liệu vào database vì vậy không cần định nghĩa trường "Ngày nhập".
    id: {
        type: String,
        required: true
    },
    bookId: {
        type: String,
        required: true
    },
    bookTypeId: {
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
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = ImportSchema;
