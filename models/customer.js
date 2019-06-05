const mongoose = require('mongoose');
const CustomerSchema = require('../schemas/customer');
let Customer = mongoose.model("Customer", CustomerSchema);

//Khách hàng nợ không quá 20 000
Customer.isValid = async (id) => {

    let customer = await Customer.findOne({
        _id: id
    }).exec();
    return customer.debtMoney < 20000; //fixme : get parameter from setting db
};


module.exports = Customer;