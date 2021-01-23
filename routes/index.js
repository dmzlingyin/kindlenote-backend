var express = require('express');
var router = express.Router();
var note = require('../controller/noteController');

/* GET home page. */
router.get('/',note.getNote);
module.exports = router;
