var express = require('express');
var register = express.Router();

/* POST register form. */
register.get('/', function (req, res, next) {
    var db = require('../config/db');

    db.end(function (err) {
        if (err) throw err;
        console.info('Database Connection closed!');
    });

    res.json({message: 'User successfully registered.'});
});

module.exports = register;
