const express = require('express');
const app = express();
const port = 3000;

app.get('/api/endpoint', (req, res) => {
    // 데이터베이스나 다른 로직을 처리한 후 결과 반환
    const data = {
        message: "애플리케이션 서버에서 받은 요청 처리 완료",
        status: "success"
    };

    res.json(data);  // JSON 형식으로 응답
});

app.listen(port, () => {
    console.log(`애플리케이션 서버가 ${port} 포트에서 실행 중...`);
});
