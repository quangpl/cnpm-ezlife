let express = require('express');
let router = express.Router();
let Book = require('../models/book');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
