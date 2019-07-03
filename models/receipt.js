const mongoose = require('mongoose');
const ReceiptSchema = require('../schemas/receipt');
let Receipt = mongoose.model("Receipt", ReceiptSchema);
let Customer = require('./customer');
Receipt.add = async ({
                         customerId: customerId,
                         numberOfMoney: numberOfMoney
                     }) => {
    let newReceipt = new Receipt({
        customerId: customerId,
        numberOfMoney: numberOfMoney
    });

    await newReceipt.save();
    return newReceipt;
};

Receipt.update = async ({
                            id: id,
                            customerId: customerId,
                            numberOfMoney: numberOfMoney
                        }) => {

    return await Receipt.updateOne({
        _id: id
    }, {
        customerId: customerId,
        numberOfMoney: numberOfMoney
    }).exec();
};

Receipt.delete = async (id) => {
    return await Receipt.deleteOne({
        _id: id
    }).exec();
};

//Số tiền thu không vượt quá số tiền khách đang nợ

Receipt.isValid = async ({
                             id,
                             numberOfMoney
                         }) => {
    let customer = await Customer.getById(id);
    return numberOfMoney <= customer.debtMoney
};

Receipt.getAll = async () => {
    return await Receipt.find({}).exec();
};

module.exports = Receipt;