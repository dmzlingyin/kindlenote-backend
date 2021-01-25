var express = require('express');
var process = require('../utils/noteProcess');
var router = express.Router();
var note = require('../controller/noteController');

/* GET users listing. */

//处理上传的标注文件
router.post('/noteprocess/',process);

//获取note数据
router.get('/',note.getNote);
router.get('/test',note.getTest);
module.exports = router;
