const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    password: 'pwadmin',
    database: 'mydatabase',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

function getUserData(userId, callback) {
    pool.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) {
            console.error('쿼리 실행 실패:', err);
            return callback(err, null);
        }
        callback(null, results);
    });
}

module.exports = { getUserData };
