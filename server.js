const express = require('express');
const app = express();  // app 객체 생성
const port = 3000;

// API 엔드포인트 설정
app.get('/api/endpoint', (req, res) => {
    const data = {
        message: "애플리케이션 서버에서 받은 요청 처리 완료",
        status: "success"
    };
    res.json(data);  // JSON 형식으로 응답
});

// 서버 실행
app.listen(port, () => {
    console.log(`애플리케이션 서버가 ${port} 포트에서 실행 중...`);
});
