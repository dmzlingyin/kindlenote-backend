const mysql = require('../utils/db');

const getTest = function(req,res) {
    const sqlArr = [];
    const sql = "select * from test";
    const callBack = function(err,data) {
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

//获取数据库中标注数据
const getNote = function(req,res) {
    const sqlArr = [];
    const sql = "select * from note";
    const callBack = function(err,data) {
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

//向数据库写入标注数据
const setNote = function(sql) {
    const sqlArr = [];
    const callback = function(err,data) {
        if(err) {
            console.log("连接出错....");
            console.log(err);
            return;
        } else {
            console.log('数据写入成功!');
        }
    }
    mysql.sqlConnect(sql,sqlArr,callback);
}

//向数据库写入标注数量
const setNoteNum = function(num) {
    const sqlArr = [];
    const sql = `INSERT INTO note_num(num) VALUES('${num}')`;
    const callback = function(err,data) {
        if(err) {
            console.log("连接出错....");
            console.log(err);
            return;
        } else {
            console.log('数据写入成功!');
        }
    }
    mysql.sqlConnect(sql,sqlArr,callback);
}

//获取数据库中标注数量
const getNoteNum = function() {
    const sqlArr = [];
    const sql = `SELECT * from note_num`;
    const callback = function(err,data) {
        if(err) {
            console.log("连接出错....");
            console.log(err);
            return;
        } else {
            console.log('hello')
            return data;
        }
    }
    mysql.sqlConnect(sql,sqlArr,callback);
}
module.exports = {
    getTest,
    getNote,
    setNote,
    setNoteNum,
    getNoteNum,
}
