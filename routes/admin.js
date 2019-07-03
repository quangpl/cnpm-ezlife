var express = require('express');
var router = express.Router();
let Book = require('../models/book');
let Bill = require('../models/bill');
let Customer = require('../models/customer');
let AmountReport = require('../models/amount_report');
let DebtReport = require('../models/debt_report');
let Setting = require('../models/setting');
let Staff = require('../models/staff');

router.get('/', function (req, res, next) {
    res.render('admin');
});

router.get('/bill', async function (req, res, next) {
    let bills = await Bill.getAll();

    res.render('admin/bill_manager', { bills: bills });
});

router.get('/bill/:id', async function (req, res, next) {
    let bill = await Bill.getById(req.params.id);
    res.json({
        bill: bill
    })
    return;
});

router.post('/bill', async function (req, res, next) {
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

router.post('/bill/delete', async function (req, res, next) {
    try {
        await Bill.delete(req.body.billId)
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

router.get('/customer', async function (req, res, next) {
    let customers = await Customer.getAll();

    res.render('admin/customer_manager', { customers: customers });
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

router.post('/customer/delete', async function (req, res, next) {
    try {
        await Customer.delete(req.body.customerId)
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

    res.render('admin/book_manager', { books: books });
});
router.get('/book/:id', async function (req, res, next) {
    try {
        console.log(req.params.id);
        let book = await Book.getById(req.params.id);
        console.log(book);
        res.json({
            success: true,
            book: book
        });
    }
    catch (e) {
        res.json({
            success: false,
            error: e
        });
    }
});

router.post('/book', async function (req, res, next) {
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

router.post('/book/delete', async function (req, res, next) {
    try {
        await Book.delete(req.body.bookId)
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

router.post('/book/update', async function (req, res, next) {
    try {
        await Book.update({
            id: req.body.bookId,
            typeId: req.body.typeId,
            name: req.body.name,
            author: req.body.author,
            unitPrice: req.body.unitPrice,
            shortDesc: req.body.shortDesc,
            fullDesc: req.body.fullDesc,
            numberOf: req.body.numberOf,
            image: req.body.image,
            tag: req.body.tag
        })
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

router.get('/staff', async function (req, res, next) {
    let staffs = await Staff.getAll();

    res.render('admin/staff_manager', { staffs: staffs });
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

router.post('/staff/delete', async function (req, res, next) {
    try {
        await Staff.delete(req.body.staffId)
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

router.get('/report', async function (req, res, next) {
    let amountReports = await AmountReport.getAll();
    let debtReports = await DebtReport.getAll();

    res.render('admin/report', {
        amountReports: amountReports,
        debtReports: debtReports
    });
});

router.post('/report', async function (req, res, next) {
    console.log(req.body);
    try {
        let newAmountReport = await AmountReport.add({
            bookId: req.body.bookId,
            time: req.body.time,
            firstAmount: req.body.firstAmount,
            lastAmount: req.body.lastAmount
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

router.post('/report/delete', async function (req, res, next) {
    try {
        await AmountReport.delete(req.body.amountReportId)
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

router.get('/setting', async function (req, res, next) {
    let settings = await Setting.getAll();

    res.render('admin/setting', { settings: settings });
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

router.post('/setting/delete', async function (req, res, next) {
    try {
        await Setting.delete(req.body.settingId)
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
