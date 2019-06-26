var express = require('express');
var router = express.Router();
let Book = require('../models/book');

/* GET users listing. */
router.get('/book', function(req, res, next) {
    res.render('./admin/book_manager')
});
router.post('/book', async function(req, res, next) {

let newbook= await Book.add({
    typeId:req.body.typeId,
    name:req.body.name,
    author: req.body.author,
    unitPrice:req.body.unitPrice,
    shortDesc:req.body.shortDesc,
    fullDesc: req.body.fullDesc,
    image:req.body.imag,
    tag: req.body.tag
});

   res.json({
      newbook:newbook
   })
});

module.exports = router;
