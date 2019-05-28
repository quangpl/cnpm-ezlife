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

<<<<<<< HEAD
=======

>>>>>>> 71bde0968910d5142075ebf4a8860ac86400d620
module.exports = ChiTietHDSchema;   //Phải giống với "ChiTietHDSchema"
