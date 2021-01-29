const express = require('express');
const process = require('../utils/noteProcess');
const router = express.Router();
const note = require('../controller/noteController');
const userHandler = require('../controller/userController');

/* GET users listing. */

//处理上传的标注文件
router.post('/noteprocess',process);
router.post('/login',userHandler);

//获取note数据
router.get('/',note.getNote);
router.get('/test',note.getTest);
router.get('/notenum',note.getNoteNum);
module.exports = router;
