const mongoose = require('mongoose');
const SettingSchema = require('../schemas/setting');
let Setting = mongoose.model("Setting", SettingSchema);

Setting.add = async ({
    nameId,
    value
}) => {

    let newSetting = new Setting({
        nameId: nameId,
        value: value
    });

    await newSetting.save();
    return newSetting;
};

Setting.update = async ({
    id,
    nameId,
    value
}) => {

    return await Setting.updateOne({
        _id: mongoose.Types.ObjectId(id)
    }, {
            nameId: nameId,
            value: value
        }).exec();
};

Setting.delete = async (id) => {
    return await Setting.deleteOne({
        _id: mongoose.Types.ObjectId(id)
    }).exec();
};

Setting.getById = async (id) => {
    return await Setting.findOne({
        _id: mongoose.Types.ObjectId(id)
    }).exec();
}

Setting.getAll = async () => {
    return await Setting.find({}).exec();
};

Setting.getByNameId = async (id) => {
    return await Setting.findOne({
        _id: mongoose.Types.ObjectId(id)
    }).exec();
}

module.exports = Setting;