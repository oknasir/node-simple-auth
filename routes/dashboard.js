var express = require('express');
var home = express.Router();
var config = require('../config');

/* GET dashboard page after authentication. */
home.get('/', function (req, res, next) {

    var user = '';
    var message_suc = '';
    var message_err = '';

    if (typeof req.cookies.hq_auth_user !== 'undefined') {
        user = req.cookies.hq_auth_user;
    } else {
        res.cookie('message_err', 'You must login to access dashboard.');
        return res.redirect('/login');
    }

    if (typeof req.cookies.message_suc !== 'undefined') {
        message_suc = req.cookies.message_suc;
        res.clearCookie('message_suc');
    }

    if (typeof req.cookies.message_err !== 'undefined') {
        message_err = req.cookies.message_err;
        res.clearCookie('message_err');
    }

    return res.render('dashboard', {config, message_err, message_suc, user});
});

module.exports = home;
