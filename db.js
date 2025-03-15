const mysql = require('mysql');

// MariaDB 연결 설정
const db = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'pwadmin',
    database: 'mydatabase'
});

// 연결
db.connect((err) => {
    if (err) {
        console.error('데이터베이스 연결 실패: ' + err.stack);
        return;
    }
    console.log('데이터베이스 연결 성공');
});

// 데이터베이스 쿼리 실행 예시
function getUserData(userId, callback) {
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error('쿼리 실행 실패: ' + err.stack);
            return callback(err, null);
        }
        callback(null, results);
    });
}

module.exports = { getUserData };
