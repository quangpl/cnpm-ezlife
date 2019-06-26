var express = require('express');
var router = express.Router();
let Book = require('../models/book');

/* Books Manager */
router.get('/book', async function (req, res, next) {
    let books = await Book.getAll();
    res.render('./admin/book_manager', {books: books})
});

router.post('/book', async function (req, res, next) {
    console.log(req.body);
    try {
        let newbook = await Book.add({
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

module.exports = router;
