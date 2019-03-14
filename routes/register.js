var express = require('express');
var register = express.Router();
var config = require('../config');

/* GET register page. */
register.get('/', function (req, res, next) {

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

    res.render('register', {config, message_err, message_suc});
});

/* POST register form. */
register.post('/', function (req, res, next) {
    var data = req.body;

    require('../helpers/register')(data, function (err, user) {
        if (err) {
            res.cookie('message_err', typeof err === 'string' ? err : 'Something went wrong.');
            return res.redirect('/register');
        } else {
            res.cookie('hq_auth_user', user);
            res.cookie('message_suc', user.name + ', you successfully registed to ' + config.app.name + '.');
            return res.redirect('/dashboard');
        }
    });
});

module.exports = register;
