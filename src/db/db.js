const mysql = require('mysql2')
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'homejam',
});

conn.connect(function (err) {

    if (err) {
        console.log(err);
        return
    } else {
        console.log('Connected')
    }

});

module.exports = conn