const userHandler = function(req,res) {
    const [username,password] = req.body;
    console.log(username);
    console.log(password);
    if(username !== 'lingyin' && password !== 'lingyin-123') {
        res.send('error');
        return;
    } else {
        res.send('ok');
        return;
    }
     
}

module.exports = userHandler;