const mysql = require('../utils/db');

const getTest = function (req, res) {
    // const sqlArr = [];
    const sql = "select * from test";
    sqlArr = [];
    const callBack = function (results, fields) {

        // console.log(data);
        res.send(results);
    }
    mysql.sqlConnect(sql, sqlArr, callBack);
}

//获取数据库中标注数据
const getNote = function (req, res) {
    const sqlArr = [];
    const sql = "select * from note";
    const callBack = function (results, fields) {
        res.send(results);
    }
    mysql.sqlConnect(sql, sqlArr, callBack);
    // console.log("请求信息为：" + re);
}

//向数据库写入标注数据
const setNote = function (sql) {
    const sqlArr = [];
    const callback = function (results, fields) {
        console.log('数据写入成功.');
    }
    mysql.sqlConnect(sql, sqlArr, callback);
}

//向数据库写入标注数量
const setNoteNum = function (num) {
    const sqlArr = [];
    const sql = `INSERT INTO note_num(num) VALUES('${num}')`;
    const callback = function (results, fields) {
        console.log('数据写入成功!');
        return results;
    }
    mysql.sqlConnect(sql, sqlArr, callback);
}

//获取数据库中标注数量
const getNoteNum = function (req,res) {
    const sqlArr = [];
    const sql = `SELECT * from note_num order by id desc`;
    var numList = [];
    const callback = function (results, fields) {
       const delta = results[0].num - results[1].num;
       res.send({
           delta
       });
    }
    mysql.sqlConnect(sql, sqlArr, callback);
    // return numList;
}
module.exports = {
    getTest,
    getNote,
    setNote,
    setNoteNum,
    getNoteNum,
}
