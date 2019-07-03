const mongoose = require('mongoose');
const StaffSchema = require('../schemas/staff');
let Staff = mongoose.model("Staff", StaffSchema);
let bcrypt = require('bcrypt');

Staff.add = async ({
    username,
    password,
    fullName,
    phone,
    address,
    employedTime
}) => {

    let newStaff = new Staff({
        username: username,
        fullName: fullName,
        password: await bcrypt.hash(password, 6),
        phone: phone,
        address: address,
        employedTime: employedTime
    });

    await newStaff.save();
    return newStaff;
};

Staff.update = async ({
    id,
    username,
    password,
    fullName,
    phone,
    address,
    employedTime
}) => {

    return await Staff.updateOne({
        _id: mongoose.Types.ObjectId(id)
    }, {
            username: username,
            fullName: fullName,
            password: await bcrypt.hash(password, 6),
            phone: phone,
            address: address,
            employedTime: employedTime
        }).exec();
};

Staff.delete = async (id) => {
    return await Staff.deleteOne({
        _id: mongoose.Types.ObjectId(id)
    }).exec();
};

Staff.getById = async (id) => {
    return await Staff.findOne({
        _id: mongoose.Types.ObjectId(id)
    }).exec();
};

Staff.getAll = async () => {
    return await Staff.find({}).exec();
};

Staff.login = async ({
    username,
    password
}) => {
    let staff = await Staff.findOne({
        username: username
    }).exec();

    if (staff) {
        if (await bcrypt.compare(password, staff.password)) {
            res.json({
                login: true,
                staff: staff
            })
        }
        else {
            res.json({
                login: false,
                error: 'Wrong password'
            })
        }
    }
    else {
        res.json({
            login: false,
            error: 'User is not valid'
        })
    }
};


module.exports = Staff;