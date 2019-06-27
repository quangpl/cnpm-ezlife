var express = require('express');
var router = express.Router();
let Book = require('../models/book')

router.get('/', function (req, res, next) {
    res.render('admin');
});

router.get('/bill', function (req, res, next) {
    res.render('admin/bill_manager');
});

router.post('/bill', async function (req, res, next) {
    console.log(req.body);
    try {
        let newBill = await Bill.add({
            customerId: req.body.customerId,
            employeeId: req.body.employeeId,
            value: req.body.value,
            books: req.body.books
        });

        res.json({
            success: true
        })
    } catch (e) {
        res.json({
            success: false,
            error: e
        })
    }
});

router.get('/customer', function (req, res, next) {
    res.render('admin/customer_manager');
});

router.post('/customer', async function (req, res, next) {
    console.log(req.body);
    try {
        let newCustomer = await Customer.add({
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            email: req.body.email,
            debtMoney: req.body.debtMoney,
        });

        res.json({
            success: true
        })
    } catch (e) {
        res.json({
            success: false,
            error: e
        })
    }
});

router.get('/book', async function (req, res, next) {
    let books = await Book.getAll();

    res.render('admin/book_manager', {books: books});
});

router.post('/book', async function (req, res, next) {
    console.log(req.body);
    try {
        let newBook = await Book.add({
            typeId: req.body.typeId,
            name: req.body.name,
            author: req.body.author,
            unitPrice: req.body.unitPrice,
            shortDesc: req.body.shortDesc,
            fullDesc: req.body.fullDesc,
            numberOf: req.body.numberOf,
            image: req.body.image,
            tag: req.body.tag
        });

        res.json({
            success: true
        })
    } catch (e) {
        res.json({
            success: false,
            error: e
        })
    }
});

router.get('/staff', function (req, res, next) {
    res.render('admin/staff_manager');
});

router.post('/staff', async function (req, res, next) {
    console.log(req.body);
    try {
        let newStaff = await Staff.add({
            type: req.body.type,
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            employedTime: req.body.employedTime,
        });

        res.json({
            success: true
        })
    } catch (e) {
        res.json({
            success: false,
            error: e
        })
    }
});

router.get('/report', function (req, res, next) {
    res.render('admin/report');
});

router.get('/setting', function (req, res, next) {
    res.render('admin/setting');
});

router.post('/setting', async function (req, res, next) {
    console.log(req.body);
    try {
        let newSetting = await Setting.add({
            description: req.body.description,
            value: req.body.value,
        });

        res.json({
            success: true
        })
    } catch (e) {
        res.json({
            success: false,
            error: e
        })
    }
});

router.get('/login', function (req, res, next) {
    res.render('admin/login');
});

router.post('/login', async function (req, res, next) {
    console.log(req.body);
    try {
        let newLogin = await Login.add({
            username: req.body.username,
            password: req.body.password,
        });

        res.json({
            success: true
        })
    } catch (e) {
        res.json({
            success: false,
            error: e
        })
    }
});

module.exports = router;
