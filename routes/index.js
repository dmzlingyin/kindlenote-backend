var express = require('express');
var router = express.Router();
var getTest = require('../controller/getTest');

/* GET home page. */
router.get('/',getTest);
module.exports = router;
