const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ChiTietHDSchema = new Schema({ //Tên + "Schema"
    MaHoaDon: {
        type: String,
        required: true
    },
    MaSach: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = ChiTietHDSchema;   //Phải giống với "ChiTietHDSchema"
