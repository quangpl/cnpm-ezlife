const mongoose = require('mongoose');
const BookSchema = require('../schemas/book');
let Book = mongoose.model("Book", BookSchema);
let Setting = require('./setting');
Book.add = async ({
    typeId,
    name,
    author,
    numberOf,
    unitPrice,
    shortDesc,
    fullDesc,
    image,
    tag
}) => {

    let newBook = new Book({
        typeId: typeId,
        name: name,
        author: author,
        numberOf: numberOf,
        unitPrice: unitPrice,
        shortDesc: shortDesc,
        fullDesc: fullDesc,
        image: image,
        tag: tag
    });

    await newBook.save();
    return newBook;
};

Book.update = async ({
    id,
    type,
    name,
    author,
    numberOf,
    unitPrice,
    shortDesc,
    fullDesc,
    image,
    tag
}) => {

    return await Book.updateOne({
        _id: id
    }, {
            type: type,
            name: name,
            author: author,
            numberOf: numberOf,
            unitPrice: unitPrice,
            shortDesc: shortDesc,
            fullDesc: fullDesc,
            image: image,
            tag: tag
        }).exec();
};


Book.delete = async (id) => {
    return await Book.deleteOne({
        _id: id
    }).exec();
};

Book.getById = async (id) => {
    return await Book.findOne({
        _id: mongoose.Types.ObjectId(id)
    }).exec();
};

Book.getPriceById = async (id) => {
    let book = await Book.findOne({
        _id: mongoose.Types.ObjectId(id)
    }).exec();
    return book.unitPrice;
};

Book.getAll = async () => {
    return await Book.find({}).exec();
};

Book.getAllByNumber = async (num) => {
    return await Book.find({}).limit(num).exec();
};

Book.getByCategory = async (category) => {
    return await Book.find({
        typeId: category
    }).exec();
};


Book.getPriceToSale = async (id) => {
    let book = await Book.find({}).exec();
    let ratio = await Book.getByNameId('ratio_price') || 1.05;
    return book.unitPrice * ratio; //todo : get parameter from setting db
};

Book.isValid = async ({
    id,
    numberOfSale
}) => {
    let book = await Book.findOne({
        _id: id
    }).exec();
    return book.numberOf - numberOfSale >= 20;
};

Book.getByListId = async (listId) => {
    return Promise.all(listId.map(async (e) => {
        let book = await Book.getById(e);
        return book;
    }));
};
module.exports = Book;