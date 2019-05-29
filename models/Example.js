const mongoose = require('mongoose');
const KhachHangSchema = require('../schemas/KhachHang');
let KhachHang = mongoose.model("KhachHang", KhachHangSchema);
// readme: https://mongoosejs.com/docs/api.html#Model

KhachHang.addMember = async ({MaKhachHang, TenKhachHang, SoDienThoai, DiaChi, Email, SoTienNo}) => {

    let KhachHang = new KhachHang({
        MaKhachHang: MaKhachHang,
        TenKhachHang: TenKhachHang,
        SoDienThoai: SoDienThoai,
        DiaChi: DiaChi,
        Email: Email,
        SoTienNo: SoTienNo
    });

    await KhachHang.save();
    return KhachHang;
};

module.exports = KhachHang;
