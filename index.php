<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API 응답 처리</title>
</head>
<body>

<?php
$api_url = "http://43.202.0.182:3000/api/endpoint";
$headers = get_headers($api_url, 1);
if ($headers === FALSE) {
    echo "API 서버에 접근할 수 없습니다.";
    exit;
}

$http_code = substr($headers[0], 9, 3);

if ($http_code < 200 || $http_code >= 300) {
    echo "API 요청 실패, 상태 코드: " . $http_code;
} else {
    $response = file_get_contents($api_url);
    if ($response === FALSE) {
        $error = error_get_last();
        echo "애플리케이션 서버로부터 응답을 받지 못했습니다. 오류: " . $error['message'];
    } else {
        echo "애플리케이션 서버 응답: " . $response;
    }
}
?>

</body>
</html>
