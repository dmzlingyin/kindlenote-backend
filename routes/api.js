var express = require('express');
var process = require('../utils/noteProcess');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//处理上传的标注文件
router.post('/noteprocess/',process);

module.exports = router;
