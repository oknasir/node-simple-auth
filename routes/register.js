var express = require('express');
var register = express.Router();
var config = require('../config');

/* GET register page. */
register.get('/', function (req, res, next) {
    res.render('register', {config});
});

/* POST register form. */
register.post('/', function (req, res, next) {
    var db = require('../config/db');

    db.end(function (err) {
        if (err) throw err;
        console.info('Database Connection closed!');
    });

    res.json({message: 'User successfully registered.'});
});

module.exports = register;
