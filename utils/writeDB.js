const fs = require('fs')
const poolsql = require('../controller/noteController');
const mysql = require('mysql');

const writeDB = function (filePath) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.log('文件读取失败!');
            console.log(err);
            return;
        } else {
            let tmpData = data.split('==========');
            //删除数组中最后一个空元素
            tmpData.pop();
            // const NOTE_NUM = tmpData.length;
            


            const connection = mysql.createConnection({
                host: 'localhost',
                port: 3306,
                user: 'root',
                password: 'lingyin-123',
                database: 'kindlenote',
            });
            connection.connect(function(err, callback) {
                if (err) {
                    console.error('error connecting: ' + err.stack);
                    return;
                }
            });
            for (let item of tmpData) {

                let name = item.split('- ')[0].split('(')[0];
                let start = item.split('- ')[0].lastIndexOf('(') + 1;
                let end = item.split('- ')[0].lastIndexOf(')');
                let author = item.slice(start, end);
                if (author.charAt(author.length - 1) === ')') author = author.split(')')[0];
                let date = item.split('- ')[1].split('|')[1].split(' ')[2];
                let time = item.split('- ')[1].split('|')[1].split(' ')[3].split('\n')[0];
                let note = item.split('- ')[1].split('|')[1].split(' ')[3].split('\n')[2];

                //写入数据库
                const sql = `INSERT INTO note(name,author,note,date,time) VALUES('${name}','${author}','${note}','${date}','${time}')`;
                // mysql.setNote(sql);
                connection.query(sql,function(err,results) {
                    if(err) console.log(err);

                });

            }
            connection.end(function(err) {
                if(err) {
                    console.log(err.message);
                }
            });

        }

    });
    return;
}
// writeDB('./My Clippings.txt');
module.exports = writeDB;