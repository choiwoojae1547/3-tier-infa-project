# 3-tier-infa-project
# 3-Tier Web Application Example

이 프로젝트는 간단한 3-tier 웹 애플리케이션 아키텍처를 보여주는 예시입니다. 웹 서버(Web Tier)는 클라이언트의 요청을 받아 애플리케이션 서버(App Tier)와 통신하며, 애플리케이션 서버는 데이터베이스와 상호작용하여 데이터를 처리합니다.

## 프로젝트 구조

├── web-tier 
│ 
└── index.php # 웹 서버에서 실행되는 PHP 코드 
├── app-tier 
│
├── server.js # 애플리케이션 서버 코드 (Node.js) 
│ 
└── db.js # 데이터베이스 연결 및 쿼리 처리
└── README.md # 프로젝트 설명 (이 파일)


## 기술 스택

- **웹 서버(Web Tier):** PHP
- **애플리케이션 서버(App Tier):** Node.js + Express
- **데이터베이스:** MariaDB (MySQL 호환)

## 실행 방법

### 1. 웹 서버(Web Tier) 실행

웹 서버는 PHP로 작성되었습니다. 아래의 단계를 따라 웹 서버를 실행합니다.

#### PHP 서버 실행 방법

1. PHP가 설치되어 있는지 확인합니다. 설치되지 않았다면 [PHP 설치 방법](https://www.php.net/manual/en/install.php)을 참고하십시오.
2. 웹 서버 폴더에서 `index.php` 파일을 실행합니다.
웹 브라우저에서 http://localhost:8080에 접속하여 웹 서버의 동작을 확인합니다.

2. 애플리케이션 서버(App Tier) 실행
애플리케이션 서버는 Node.js와 Express로 작성되었습니다. 아래의 단계를 따라 애플리케이션 서버를 실행합니다.
Node.js 및 Express 설치
Node.js가 설치되어 있는지 확인합니다. 설치되지 않았다면 Node.js 설치 방법을 참고하십시오.
애플리케이션 서버 폴더에서 server.js를 실행합니다.
애플리케이션 서버는 기본적으로 http://localhost:3000에서 실행됩니다.

3. 데이터베이스 설정
이 애플리케이션은 MariaDB를 사용하여 데이터를 저장합니다. MariaDB 또는 MySQL 서버를 설치한 후, db.js에서 데이터베이스 연결 정보를 수정하십시오.
MariaDB 설정
MariaDB를 설치합니다. 설치 방법은 MariaDB 공식 문서에서 확인할 수 있습니다.
데이터베이스를 생성하고, 애플리케이션이 사용할 테이블을 생성합니다.
db.js 파일을 수정하여 MariaDB의 연결 정보를 입력합니다.

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',  // 수정 필요
    database: 'mydatabase'      // 수정 필요
});

기능
웹 서버는 사용자의 요청을 받아 애플리케이션 서버로 전달합니다.
애플리케이션 서버는 데이터베이스와 상호작용하여 데이터를 처리하고, 그 결과를 웹 서버로 반환합니다.
애플리케이션 서버의 /api/endpoint 경로는 사용자의 요청을 받아 처리하며, 예시로 사용자의 정보를 반환하는 API 엔드포인트가 구현되어 있습니다.
---
개발 환경
PHP 7.x 이상 (웹 서버)
Node.js 14.x 이상 (애플리케이션 서버)
MariaDB 10.x 이상 (데이터베이스)
