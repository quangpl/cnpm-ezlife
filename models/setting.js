const mongoose = require('mongoose');
const SettingSchema = require('../schemas/setting');
let Setting = mongoose.model("Setting", SettingSchema);

Setting.add = async ({
                          description,
                          value
                     }) => {

    let newSetting = new Setting ({
        description: description,
        value: value
    });

    await newSetting.save();
    return newSetting;
};

Setting.update = async ({
                             id,
                             description,
                             value
                        }) => {
    
    return await Setting.updateOne({
        _id: id
    }, {
        description: description,
        value: value
    }).exec();
};

Setting.delete = async (id) => {
    return await Setting.deleteOne({
        _id: id
    }).exec();
};

Setting.getById = async (id) => {
    return await Setting.findOne({
        _id: id
    }).exec();
}

Setting.getAll = async () => {
    return await Setting.find({}).exec();
};

module.exports = Setting;