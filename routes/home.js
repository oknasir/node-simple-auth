var express = require('express');
var home = express.Router();

/* GET home page. */
home.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = home;
