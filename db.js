// MySQL2 라이브러리를 불러옵니다. mysql2는 mysql보다 더 빠르고 다양한 기능을 지원합니다.
const mysql = require('mysql2');

// MySQL 데이터베이스와 연결을 관리하는 커넥션 풀을 생성합니다.
// 커넥션 풀을 사용하면 여러 요청을 동시에 처리할 수 있습니다.
const pool = mysql.createPool({
    host: 'database-1.cxqu2e2cg5ww.ap-northeast-2.rds.amazonaws.com', // RDS 인스턴스의 호스트 주소
    user: 'admin',  // 데이터베이스 로그인 사용자명
    password: 'pwadmin',  // 데이터베이스 로그인 비밀번호
    database: 'mydatabase',  // 사용할 데이터베이스 이름
    waitForConnections: true,  // 커넥션 풀이 커넥션을 기다릴 수 있도록 설정
    connectionLimit: 10,  // 최대 커넥션 수 (한 번에 연결할 수 있는 커넥션 수)
    queueLimit: 0  // 커넥션 큐에서 허용할 수 있는 최대 대기 요청 수 (0은 무제한 대기)
});

// 사용자 데이터를 가져오는 함수
// userId를 받아서 해당 사용자 정보를 데이터베이스에서 조회합니다.
function getUserData(userId, callback) {
    // 데이터베이스에서 users 테이블의 특정 사용자 정보를 조회하는 쿼리 실행
    pool.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) {
            // 쿼리 실행 중 에러가 발생한 경우 에러를 콘솔에 출력하고 콜백을 호출
            console.error('쿼리 실행 실패:', err);
            return callback(err, null); // 콜백으로 에러와 null을 전달
        }
        // 쿼리 실행 성공 시, 결과를 콜백 함수로 전달
        callback(null, results); // 첫 번째 인자는 에러, 두 번째 인자는 결과
    });
}

// 이 모듈을 외부에서 사용할 수 있도록 getUserData 함수만 내보냅니다.
module.exports = { getUserData };
