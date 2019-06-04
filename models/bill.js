const mongoose = require('mongoose');
const BillSchema = require('../schemas/bill');
let Bill = mongoose.model("Bill", BillSchema);
let Book = require('./book');

Bill.add = async ({
                      customerId: customerId,
                      employeeId: employeeId,
                      books: books,
                  }) => {
    let value;
     // todo:Get prices of array books

    let newBill = new Bill({
        customerId: customerId,
        employeeId: employeeId,
        value: value,
        books: books,
    });

    await newBill.save();
    return newBill;
};

Bill.update = async ({
                         id: id,
                         customerId: customerId,
                         employeeId: employeeId,
                         value: value,
                         books: books,
                     }) => {
//todo: check customer is valid (debt <20 000 & redudant of book after sale >=20
    return await Book.updateOne({
        _id: id
    }, {
        customerId: customerId,
        employeeId: employeeId,
        value: value,
        books: books,
    }).exec();
};

Bill.delete = async (id) => {
    return await Bill.deleteOne({
        _id: id
    }).exec();
};


module.exports = Bill;