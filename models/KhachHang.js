const mongoose = require('mongoose');
const KhachHangSchema = require('../schemas/KhachHang');
let KhachHang = mongoose.model("KhachHang", KhachHangSchema);
// readme: https://mongoosejs.com/docs/api.html#Model

KhachHang.addMember = async ({MaKhachHang, TenKhachHang, SoDienThoai, DiaChi, Email}) => {

    let newKh = new KhachHang({
        MaKhachHang: MaKhachHang,
        TenKhachHang: TenKhachHang,
        SoDienThoai: SoDienThoai,
        DiaChi: DiaChi,
        Email: Email,
        SoTienNo : 0
    });

    await newKh.save();
    return newKh;
};

KhachHang.updateMember = async ({MaKhachHang, TenKhachHang, SoDienThoai, DiaChi, Email, SoTienNo}) => {
    
    let newKh = new KhachHang({
        MaKhachHang: MaKhachHang,
        TenKhachHang: TenKhachHang,
        SoDienThoai: SoDienThoai,
        DiaChi: DiaChi,
        Email: Email,
        SoTienNo: SoTienNo
    }); 

    await KhachHang.update({MaKhachHang : newKh.MaKhachHang()}, KhachHang = newKh);
    return KhachHang;
};

KhachHang.deleteMember = async ({MaKhachHang, TenKhachHang, SoDienThoai, DiaChi, Email, SoTienNo}) => {
    
    let newKh = new KhachHang({
        MaKhachHang: MaKhachHang,
        TenKhachHang: TenKhachHang,
        SoDienThoai: SoDienThoai,
        DiaChi: DiaChi,
        Email: Email,
        SoTienNo: SoTienNo
    });
    
    await KhachHang.deleteOne({MaKhachHang : newKh. MaKhachHang()})
    return KhachHang;
};

module.exports = KhachHang;
