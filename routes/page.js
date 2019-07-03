let express = require('express');
let router = express.Router();
let Book = require('../models/book');

router.get('/', async function (req, res, next) {
    let books = await Book.getAllByNumber(10)

    res.render('./pages/index', { books: books, customerId: req.session.customerId });
});

router.get('/type', async function (req, res, next) {
    if (!req.query.id) {
        let books = await Book.getAll();
        res.render('./pages/all-products', { books: books, customerId: req.session.customerId, id: req.query.id });
        return;
    }
    let books = await Book.getByCategory(req.query.id);
    if (!books) {
        res.redirect('/');
        return;
    }
    res.render('./pages/all-products', { books: books, customerId: req.session.customerId, id: req.query.id });
});

router.get('/cart', async function (req, res, next) {
    res.render('./pages/cart');
});

router.get('/checkout', async function (req, res, next) {
    res.render('./pages/checkout');
});

router.get('/login', async function (req, res, next) {
    res.render('./pages/login');
});

router.get('/my-account', async function (req, res, next) {
    res.render('./pages/my-account');
});

router.get('/book', async function (req, res, next) {
    if (req.query.id) {
        let book = await Book.getById(req.query.id);
        let relates = await Book.getByCategory(book.typeId);

        res.render('./pages/book', { book: book, relates: relates, customerId: req.session.customerId });
    } else {
        res.redirect('/')
    }
});

router.get('/wishlist', async function (req, res, next) {
    res.render('./pages/wishlist');
});

module.exports = router;
