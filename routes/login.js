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
    require('../helpers/validate').user(data.email, data.password, function (err, result) {
        if (err) {
            res.cookie('message_err', 'Invalid email/password.');
            return res.redirect('/login');
        } else {
            if (result.res) {
                res.cookie('hq_auth_user', result.user);
                res.cookie('message_suc', result.user.name + ', you successfully login to ' + config.app.name + '.');
                return res.redirect('/dashboard');
            } else {
                res.cookie('message_err', 'Invalid email/password.');
                return res.redirect('/login');
            }
        }
    });
});

module.exports = login;
