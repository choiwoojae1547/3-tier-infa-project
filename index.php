<?php
// 애플리케이션 서버 URL
$api_url = "http://10.0.2.82:<포트>/api/endpoint";

// 애플리케이션 서버로 GET 요청 보내기
$response = file_get_contents($api_url);

if ($response === FALSE) {
    echo "애플리케이션 서버로부터 응답을 받지 못했습니다.";
} else {
    // 애플리케이션 서버의 응답 출력
    echo "애플리케이션 서버 응답: " . $response;
}
?>
