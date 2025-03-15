<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API 응답 처리</title>
</head>
<body>

<?php
// API 서버 URL을 설정합니다.
$api_url = "http://43.202.0.182:3000/api/endpoint";

// get_headers() 함수로 API 서버에 대한 HTTP 헤더를 가져옵니다.
// 두 번째 인자를 1로 설정하여 헤더 정보만 배열로 받습니다.
$headers = get_headers($api_url, 1);

// get_headers() 함수가 실패하면 FALSE를 반환하므로, 실패 시 사용자에게 오류 메시지를 표시하고 종료합니다.
if ($headers === FALSE) {
    echo "API 서버에 접근할 수 없습니다.";  // API 서버에 접근할 수 없다는 메시지를 출력합니다.
    exit;  // 실행을 종료합니다.
}

// HTTP 응답 상태 코드에서 'HTTP/1.1 200 OK'와 같은 상태 코드 부분을 추출하여 $http_code에 저장합니다.
// substr()를 사용하여 'HTTP/' 뒤의 상태 코드(200, 404 등)를 추출합니다.
$http_code = substr($headers[0], 9, 3);

// 상태 코드가 200 이상 300 미만(성공적인 응답 범위)이 아니면 요청이 실패한 것으로 간주하고 오류 메시지를 출력합니다.
if ($http_code < 200 || $http_code >= 300) {
    echo "API 요청 실패, 상태 코드: " . $http_code;  // 상태 코드와 함께 오류 메시지를 출력합니다.
} else {
    // 상태 코드가 200번대라면, file_get_contents()로 실제 API의 응답을 받아옵니다.
    $response = file_get_contents($api_url);

    // file_get_contents()가 실패하면 FALSE를 반환하므로, 실패 시 오류 메시지를 출력합니다.
    if ($response === FALSE) {
        // 오류 메시지를 얻어오기 위해 error_get_last()를 사용합니다.
        $error = error_get_last();
        echo "애플리케이션 서버로부터 응답을 받지 못했습니다. 오류: " . $error['message'];  // 오류 메시지를 출력합니다.
    } else {
        // 응답을 성공적으로 받았다면, 응답 내용을 화면에 출력합니다.
        echo "애플리케이션 서버 응답: " . $response;  // 서버 응답을 출력합니다.
    }
}
?>

</body>
</html>
