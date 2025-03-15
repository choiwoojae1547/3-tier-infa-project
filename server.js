app.get('/api/endpoint', (req, res) => {
    const data = {
        message: "애플리케이션 서버에서 받은 요청 처리 완료",
        status: "success"
    };
    res.json(data);
});
