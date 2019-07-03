const mongoose = require('mongoose');
const BillSchema = require('../schemas/bill');
let Bill = mongoose.model("Bill", BillSchema);
let Book = require('./book');

Bill.add = async ({
    customerId,
    employeeId,
    books
}) => {
    let value = await Bill.getValue(books);
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
    id,
    customerId,
    employeeId,
    books
}) => {

    let value = await Bill.getValue(books);
    return await Book.updateOne({
        _id: id
    }, {
            customerId: customerId,
            employeeId: employeeId,
            books: books,
            value: value
        }).exec();
};

Bill.delete = async (id) => {
    return await Bill.deleteOne({
        _id: id
    }).exec();
};

Bill.getById = async (id) => {
    return await Bill.findOne({
        _id: mongoose.Types.ObjectId(id)
    }).exec();
};

Bill.getValue = async (listBook) => {
    let value = 0;
    let books = [];
    listBook.forEach(async (e) => {
        books.push(await Book.getById(e));
    });

    for (let i = 0; i < books.length; i++) {
        let price = books[i].unitPrice * 1.05;//todo: get parameter from setting db
        value += price;
    }

    return value;
};

Bill.getAll = async () => {
    return await Bill.find({}).exec();
};

module.exports = Bill;