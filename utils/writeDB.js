const fs = require('fs')
const mysql = require('../controller/noteController');

const writeDB = function (filePath) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.log('文件读取失败!');
            console.log(err);
            return;
        } else {
            let tmpData = data.split('==========');
            //删除数组中最后一个空元素
            tmpData.splice(tmpData.length - 1, 1);
            const NOTE_NUM = tmpData.length;
            (async () => {
                let num = await mysql.getNoteNum();
                console.log(num);
            })();

        //     for (let item of tmpData) {
        //         let tempNote = [];
        //         let name = item.split('- ')[0].split('(')[0];
        //         let start = item.split('- ')[0].lastIndexOf('(') + 1;
        //         let end = item.split('- ')[0].lastIndexOf(')');
        //         let author = item.slice(start, end);
        //         if (author.charAt(author.length - 1) === ')') author = author.split(')')[0];
        //         let date = item.split('- ')[1].split('|')[1].split(' ')[2];
        //         let time = item.split('- ')[1].split('|')[1].split(' ')[3].split('\n')[0];
        //         let note = item.split('- ')[1].split('|')[1].split(' ')[3].split('\n')[2];

        //         //写入数据库
        //         const sql = `INSERT INTO note(name,author,note,date,time) VALUES('${name}','${author}','${note}','${date}','${time}')`;
        //         mysql.setNote(sql);
        //     }
        }

    });
    return;
}


// function()
writeDB('./My Clippings.txt');
// module.exports = writeDB;