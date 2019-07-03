const mongoose = require('mongoose');
const CustomerSchema = require('../schemas/customer');
let Customer = mongoose.model("Customer", CustomerSchema);
let bcrypt = require('bcrypt');

Customer.register = async ({
    name,
    password,
    email,
}) => {
    let hashPassword = await bcrypt.hash(password, 6);
    let newCustomer = new Customer({
        name: name,
        password: hashPassword,
        email: email,
    });

    await newCustomer.save();
    return newCustomer;
};

Customer.isRegister = async (email) => {
    let customer = await Customer.findOne({
        email: email
    }).exec();
    return !!customer;
};


Customer.login = async ({
    email,
    password,
}) => {
    let user = await Customer.findOne({
        email: email
    }).exec();

    if (user) {
        let result = await bcrypt.compare(password, user.password);
        if (result) {
            return {
                login: true,
                user: user
            }
        }
        else {
            return {
                login: false,
                error: 'Wrong password'
            }
        }
    }
    else {
        return {
            login: false,
            error: 'User is invalid'
        }
    }
};

Customer.update = async ({
    id,
    name,
    password,
    phone,
    address,
    email
}) => {

    return await Customer.updateOne({
        _id: mongoose.Types.ObjectId(id)
    }, {
            name: name,
            password: password,
            phone: phone,
            address: address,
            email: email,
        }).exec();
};

Customer.updateDebt = async ({
    id,
    debtMoney
}) => {

    return await Customer.updateOne({
        _id: mongoose.Types.ObjectId(id)
    }, {
            debtMoney: debtMoney
        }).exec();
};

Customer.delete = async (id) => {
    return await Customer.deleteOne({
        _id: id
    }).exec();
};

//Khách hàng nợ không quá 20 000
Customer.isValid = async (id) => {

    let customer = await Customer.findOne({
        _id: mongoose.Types.ObjectId(id)
    }).exec();
    return customer.debtMoney < 20000; //fixme : get parameter from setting db
};

Customer.getById = async (id) => {

    return await Customer.findOne({
        _id: mongoose.Types.ObjectId(id)
    }).exec();
};

Customer.getAll = async () => {
    return await Customer.find({}).exec();
};

module.exports = Customer;