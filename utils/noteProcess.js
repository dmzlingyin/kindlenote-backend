const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const writeDB = require('./writeDB');

const process = function (req, res) {
    const form = new formidable.IncomingForm();
    //保持文件的原扩展名
    form.keepExtensions = true; 
    //设置文件上传的存放路径
    const desDir = 'E:\\Garage_plan\\kindlenote-backend\\tmp';
    form.uploadDir = desDir;
    form.parse(req, function (err, fields, file) {
        //文件重命名
        const fileName = path.join(desDir,'note.txt');
        fs.rename(file.file.path,fileName,err => {
            if(err) {
                console.log(err);
            }
        });
        writeDB(fileName);
        res.send('OK');
        return;
    });
}

module.exports = process;