var db = require('../config/db');
var bcrypt = require('bcrypt');

module.exports = function (_data, cb) {
    db.query('select * from users where email=?', [_data.email], function (err, user) {
        if (err) return cb(err);

        if (user.length)
            return cb('User already exist.');
        else
            bcrypt.genSalt(10, function (err, salt) {
                if (err) return cb(err);

                bcrypt.hash(_data.password, salt, function (err, hash) {
                    if (err) return cb(err);

                    db.query('INSERT INTO users SET ?', {
                        name: _data.name,
                        email: _data.email,
                        password: hash,
                        created_at: new Date(),
                        updated_at: new Date()
                    }, function (err, user) {
                        if (err) return cb(err);

                        db.query('select * from users where id=?', [user.insertId], function (err, user) {
                            return cb(null, user[0]);
                        });
                    });
                });
            });
    });
};
