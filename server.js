const express = require('express');                         //express 라이브러리를 불러옵니다. express는 Node.js의 웹 서버 프레임워크로, HTTP 요청을 처리하는 데 유용.
const app = express();                                      //app 객체 생성, 이 객체는 서버의 모든 설정과 라우팅을 관리하는 핵심 객체
const port = 3000;                                          //서버가 실행될 포트를 정의합니다. 여기서는 3000 포트를 사용합니다. 웹 브라우저나 다른 클라이언트가 이 포트로 접근하여 서버와 통신

// API 엔드포인트 설정
app.get('/api/endpoint', (req, res) => {    
                                                            //api/endpoint 경로로 HTTP GET 요청을 처리하는 라우트 핸들러를 정의 
                                                            //req: 요청 객체 (클라이언트에서 보낸 데이터나 정보가 포함됨). 
                                                            //res: 응답 객체 (서버에서 클라이언트로 보내는 데이터가 포함됨).
    const data = {
        message: "애플리케이션 서버에서 받은 요청 처리 완료",
        status: "success"
    };
    res.json(data);  // JSON 형식으로 응답
});

// 서버 실행
app.listen(port, () => {                                    //서버가 지정한 포트(여기서는 3000번 포트)에서 요청을 수신하도록 시작
                                                            //서버가 정상적으로 시작되면, 콘솔에 "애플리케이션 서버가 3000 포트에서 실행 중..."이라는 메시지가 출력
    console.log(`애플리케이션 서버가 ${port} 포트에서 실행 중...`);
});
