let express = require('express');
let router = express.Router();
let Customer = require('../models/customer');

router.post('/login', async function (req, res, next) {
    let result = await Customer.login({
        email: req.body.email,
        password: req.body.password
    })
    if (result.login == true) {
        req.session.customerId = result.user._id;
        res.json({
            login: true,
            user: result
        })
    }
    else {
        res.json({
            login: false,
            user: 'Wrong password or username'
        })
    }

});

router.post('/register', async function (req, res, next) {
    try {
        if (await Customer.isRegister(req.body.email)) {
            res.json({
                register: false,
                error: 'Email has been used'
            })
            return;
        }
        let newUser = await Customer.register({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        })
        res.json({
            register: true,
            user: newUser
        })
        return;

    }
    catch (e) {
        res.json({
            register: false,
            error: e
        })
        return;
    }
});

router.post('/update', async function (req, res, next) {
    if (await Customer.isRegister(req.body.email)) {
        res.json({
            register: false,
            error: 'Email has been used'
        })
        return;

    }
    await Customer.update({
        id: req.body.customerId,
        name: req.body.name,
        password: req.body.password,
        phone: req.body.phone,
        address: req.body.address,
        email: req.body.email
    })
    res.json({
        update: true
    })
    return;


});

module.exports = router;
