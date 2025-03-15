$api_url = "http://10.0.2.82:3000/api/endpoint";

$response = @file_get_contents($api_url); // suppress error output
if ($response === FALSE) {
    $error = error_get_last(); // 디버깅용
    echo "애플리케이션 서버로부터 응답을 받지 못했습니다. 오류: " . $error['message'];
} else {
    echo "애플리케이션 서버 응답: " . $response;
}
