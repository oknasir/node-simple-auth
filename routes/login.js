var express = require('express');
var login = express.Router();
var config = require('../config');

/* GET login page. */
login.get('/', function (req, res, next) {
    var message_suc = '';
    var message_err = '';
    if (typeof req.cookies.message_suc !== 'undefined') {
        message_suc = req.cookies.message_suc;
        res.clearCookie('message_suc');
    }
    if (typeof req.cookies.message_err !== 'undefined') {
        message_err = req.cookies.message_err;
        res.clearCookie('message_err');
    }
    res.render('login', {config, message_err, message_suc});
});

/* POST login form. */
login.post('/', function (req, res, next) {
    var data = req.body;
    require('../helpers/validate').user(data.email, data.password, function (e, r) {
        if (e) {
            res.cookie('message_err', 'Invalid email/password.');
            return res.redirect('/login');
        } else {
            return res.json({message: 'User successfully logged in.'});
        }
    });
});

module.exports = login;
