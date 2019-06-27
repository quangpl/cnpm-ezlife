const mongoose = require('mongoose');
const CustomerSchema = require('../schemas/customer');
let Customer = mongoose.model("Customer", CustomerSchema);

Customer.add = async ({
                          name,
                          phone,
                          address,
                          email,
                          debtMoney
                      }) => {
    let newCustomer = new Customer({
        name: name,
        phone: phone,
        address: address,
        email: email,
        debtMoney: debtMoney
    });

    await newCustomer.save();
    return newCustomer;
};

Customer.update = async ({
                          id,
                          name,
                          phone,
                          address,
                          email,
                          debtMoney
                      }) => {

    return await Customer.updateOne({
        _id: id
    }, {
        name: name,
        phone: phone,
        address: address,
        email: email,
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
        _id: id
    }).exec();
    return customer.debtMoney < 20000; //fixme : get parameter from setting db
};

Customer.getById = async (id) => {

    return await Customer.findOne({
        _id: id
    }).exec();
};

module.exports = Customer;