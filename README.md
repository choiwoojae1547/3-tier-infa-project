# 3-Tier Architecture Project

## 프로젝트 설명
이 프로젝트는 3-tier 아키텍처를 기반으로 한 웹 애플리케이션 구현 예시입니다. 시스템은 세 가지 주요 계층으로 구성됩니다:
1. **Web Tier (WAS)**: 사용자 요청을 처리하는 웹 서버 (Apache, PHP)
2. **Application Tier**: API 요청을 처리하는 애플리케이션 서버 (Node.js, Express)
3. **Database Tier**: 사용자 데이터와 관련된 정보를 저장하는 데이터베이스 서버 (MariaDB)

## 아키텍처 구성
- **Web Server**: Apache + PHP (index.php)
- **Application Server**: Node.js + Express (server.js)
- **Database Server**: MariaDB (users 테이블 포함)

## 기능
- 사용자는 웹 서버를 통해 애플리케이션 서버에 HTTP 요청을 보냄
- 애플리케이션 서버는 요청을 처리하고 JSON 형식으로 응답
- 애플리케이션 서버는 MariaDB에서 사용자 데이터를 조회하거나 저장

## 시스템 요구사항
- Ubuntu 20.04 또는 그 이상
- Node.js 14.x 이상
- MariaDB 10.x 이상
- Apache 2.x (웹 서버용)

## 설치 및 실행 방법

### 1. 애플리케이션 서버 설치 (Node.js)
# Node.js 및 필요한 라이브러리 설치
sudo apt update
sudo apt install nodejs npm

# 애플리케이션 서버 실행
cd /path/to/your/project
npm install
node server.js

### 2. 웹 서버 설정 (Apache + PHP)
# Apache와 PHP 설치
sudo apt update
sudo apt install apache2 php libapache2-mod-php

# 웹 서버에서 index.php 파일 설정
sudo cp /path/to/your/index.php /var/www/html/


**###3. 데이터베이스 서버 설정 (MariaDB)**
# MariaDB 설치
sudo apt update
sudo apt install mariadb-server

# MariaDB 접속 및 테이블 생성
sudo mysql -u root -p
CREATE DATABASE mydatabase;
USE mydatabase;
CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), email VARCHAR(100));

**4. 네트워크 및 보안 설정**
	•	애플리케이션 서버와 데이터베이스 서버 간의 연결을 허용하려면 보안 그룹과 방화벽 규칙을 설정해야 합니다.
	•	각 서버는 적절한 포트 (예: 3000, 3306)가 열려 있어야 합니다.
