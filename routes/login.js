var express = require('express');
var login = express.Router();

/* GET login page. */
login.get('/', function (req, res, next) {
    res.render('login', {title: 'Login Page'});
});

/* POST login form. */
login.post('/', function (req, res, next) {
    res.json({message: 'User successfully logged in.'});
});

module.exports = login;
