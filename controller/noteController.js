var mysql = require('../utils/db');

var getTest = function(req,res) {
    var sqlArr = [];
    var sql = "select * from test";
    var callBack = function(err,data) {
        if(err) {
            console.log("连接出错");
            return;
        } else {
            // console.log(data);
            res.send(data);
        }
    }
    mysql.sqlConnect(sql,sqlArr,callBack);
}

var getNote = function(req,res) {
    var sqlArr = [];
    var sql = "select * from note";
    var callBack = function(err,data) {
        if(err) {
            console.log("连接出错");
            return;
        } else {
            res.send(data);
        }
    }
    mysql.sqlConnect(sql,sqlArr,callBack);
    // console.log("请求信息为：" + re);
}

module.exports = {
    getTest,
    getNote
}
