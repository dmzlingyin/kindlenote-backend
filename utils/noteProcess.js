const formidable = require('formidable');

const process = function(req,res) {
    const form = new formidable.IncomingForm();
    form.UploadDir = path.join(__dirname,'tmp');
    form.parse(req,function(err,fields,file) {
        res.send('hello');
    });
}

module.exports = process;