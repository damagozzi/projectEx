const express = require('express');
const multer = require('multer');
const app = express();
const port = 8080;

// 파일 저장을 위한 multer 설정
const upload = multer({ dest: 'uploads/' });

// recovery.js에서 recoverFile 함수 가져오기
const { recoverFile } = require('./recovery');

// 정적 파일 제공을 위한 설정
app.use(express.static('public'));



// 파일 업로드 및 복구 처리 라우트
app.post('/upload', upload.single('file'), (req, res) => {
    const filePath = req.file.path;
    const recoveryTool = req.body.recoveryTool;

    recoverFile(filePath, recoveryTool, (error, result) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send('Failed to recover file');
        }
        console.log(`stdout: ${result.stdout}`);
        console.error(`stderr: ${result.stderr}`);
        res.send('File recovery process completed');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
