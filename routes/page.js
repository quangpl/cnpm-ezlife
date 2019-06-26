let express = require('express');
let router = express.Router();
let Book = require('../models/book');

router.get('/', function(req, res, next) {
    res.render('./pages/index');
});

router.get('/all', function(req, res, next) {
    res.render('./pages/all-products');
});

router.get('/cart', function(req, res, next) {
    res.render('./pages/cart');
});

router.get('/checkout', function(req, res, next) {
    res.render('./pages/checkout');
});

router.get('/login', function(req, res, next) {
    res.render('./pages/login');
});

router.get('/my-account', function(req, res, next) {
    res.render('./pages/my-account');
});

router.get('/product', function(req, res, next) {
    res.render('./pages/single-product');
});

router.get('/wishlist', function(req, res, next) {
    res.render('./pages/wishlist');
});

module.exports = router;
