# Node.js 공식 이미지를 기반으로 합니다.
FROM node:latest

# 복구 도구 설치
# TestDisk와 PhotoRec 설치
RUN apt-get update && apt-get install -y testdisk \
    && rm -rf /var/lib/apt/lists/*


# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 의존성 파일 복사 후 설치
COPY package*.json ./
RUN npm install

# 애플리케이션 소스 복사
COPY . .

# 애플리케이션 시작 명령
CMD [ "node", "src/index.js" ]
