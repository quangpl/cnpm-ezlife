const mongoose = require('mongoose');
const BookSchema = require('../schemas/book');
let Book = mongoose.model("Book", BookSchema);

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

Book.findBook = async()=>{
    let book = await Book.find({$text: { $search: "car" } });
    console.log(book);
};
module.exports = Book;