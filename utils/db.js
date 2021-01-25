const mysql = require('mysql')

module.exports = {
  config: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'lingyin-123',
    database: 'kindlenote',
  },
  // sqlConnect: function(sql,sqlArr,callBack) {
  //   var pool = mysql.createPool(this.config);
  //   pool.getConnection((err,conn) => {
  //     if(err) throw err;
  //     pool.query(sql,sqlArr,callBack);
  //   });
  // }
  sqlConnect: function (sql, sqlArr, callback) {
    var pool = mysql.createPool(this.config);
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

      connection.query(sql, sqlArr, function (err, results, fields) {
        connection.release();
        if (err) {
          console.log('数据操作失败');
          throw err;
        }
        //将查询出来的数据返回给回调函数
        callback && callback(results, fields);
        //results作为数据操作后的结果，fields作为数据库连接的一些字段
        //停止链接数据库，必须再查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败

      });
    });
  }
}