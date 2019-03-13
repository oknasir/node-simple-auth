var mysql = require('mysql');
var config = require('./index');

var con = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    database: config.db.name,
    password: config.db.pass
});

con.connect(function (err) {
    if (err) throw err;
    console.info('Database Connected!');
});

module.exports = con;
