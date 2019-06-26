var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('admin');
});

router.get('/bill', function(req, res, next) {
    res.render('admin/bill_manager');
});

router.get('/customer', function(req, res, next) {
    res.render('admin/customer_manager');
});

router.get('/book', function(req, res, next) {
    res.render('admin/book_manager');
});

router.get('/staff', function(req, res, next) {
    res.render('admin/staff_manager');
});

router.get('/report', function(req, res, next) {
    res.render('admin/report');
});

router.get('/setting', function(req, res, next) {
    res.render('admin/setting');
});

router.get('/login', function(req, res, next) {
    res.render('admin/login');
});

module.exports = router;
