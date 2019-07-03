const mongoose = require('mongoose');
const StaffSchema = require('../schemas/staff');
let Staff = mongoose.model("Staff", StaffSchema);

Staff.add = async ({
                      type,
                      name,
                      phone,
                      address,
                      employedTime
                  }) => {

    let newStaff = new Staff({
        type: type,
        name: name,
        phone: phone,
        address: address,
        employedTime: employedTime
    });

    await newStaff.save();
    return newStaff;
};

Staff.update = async ({
                         id,
                         type,
                         name,
                         phone,
                         address,
                         employedTime
                     }) => {

    return await Staff.updateOne({
        _id: id
    }, {
        type: type,
        name: name,
        phone: phone,
        address: address,
        employedTime: employedTime
    }).exec();
};

Staff.delete = async (id) => {
    return await Staff.deleteOne({
        _id: id
    }).exec();
};

Staff.getById = async (id) => {
    return await Staff.findOne({
        _id: id
    }).exec();
};

Staff.getAll = async () => {
    return await Staff.find({}).exec();
};

module.exports = Staff;