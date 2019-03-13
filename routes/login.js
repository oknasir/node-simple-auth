var express = require('express');
var login = express.Router();
var config = require('../config');

/* GET login page. */
login.get('/', function (req, res, next) {
    res.render('login', {config});
});

/* POST login form. */
login.post('/', function (req, res, next) {
    res.json({message: 'User successfully logged in.'});
});

module.exports = login;
