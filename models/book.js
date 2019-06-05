const mongoose = require('mongoose');
const BookSchema = require('../schemas/book');
let Book = mongoose.model("Book", BookSchema);

Book.add = async ({
                      type: type,
                      name: name,
                      author: author,
                      numberOf: numberOf,
                      unitPrice: unitPrice
                  }) => {

    let newBook = new Book({
        type: type,
        name: name,
        author: author,
        numberOf: numberOf,
        unitPrice: unitPrice
    });

    await newBook.save();
    return newBook;
};

Book.update = async ({
                         id: id,
                         type: type,
                         name: name,
                         author: author,
                         numberOf: numberOf,
                         unitPrice: unitPrice
                     }) => {

    return await Book.updateOne({
        _id: id
    }, {
        type: type,
        name: name,
        author: author,
        numberOf: numberOf,
        unitPrice: unitPrice
    }).exec();
};


Book.delete = async (id) => {
    return await Book.deleteOne({
        _id: id
    }).exec();
};

Book.getById = async (id) => {
    return await Book.findOne({
        _id: id
    }).exec();
};

Book.getPriceById = async (id) => {
    let book = await Book.findOne({
        _id: id
    }).exec();
    return book.unitPrice;
};

Book.getAll = async () => {
    return await Book.find({}).exec();
};

Book.getPriceToSale = async (id) => {
    let book = await Book.find({}).exec();
    return book.unitPrice * 1.05;  //todo : get parameter from setting db
};

Book.isValid = async ({id, numberOfSale}) => {
    let book = await Book.findOne({
        _id: id
    }).exec();
    return book.numberOf - numberOfSale >= 20;
};



module.exports = Book;