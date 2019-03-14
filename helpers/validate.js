var db = require('../config/db');
var bcrypt = require('bcrypt');

module.exports = {
    user: function (email, password, cb) {

        db.query('select * from users where email=?', [email], function (err, user) {

            db.end();
            if (err) return cb(err);

            if (user.length) user = user[0];
            else return cb('Invalid login info.');

            bcrypt.compare(password, user.password, function (err, res) {
                return cb(null, {res, user})
            });
        });
    }
};
