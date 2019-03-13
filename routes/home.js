var express = require('express');
var home = express.Router();
var config = require('../config');

/* GET home page. */
home.get('/', function (req, res, next) {
    res.render('home', {config});
});

module.exports = home;
