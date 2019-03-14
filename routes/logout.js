var express = require('express');
var home = express.Router();
var config = require('../config');

/* GET logout user. */
home.get('/', function (req, res, next) {
    res.clearCookie('hq_auth_user');
    res.redirect('/login');
});

module.exports = home;
