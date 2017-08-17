var express = require('express');
var router = express.Router();
var mysql = require('mysql');       // mariaDB도 mysql 씀

var connection = mysql.createConnection(
    {
        host :'localhost',
        port : 3307,
        user : 'root',
        password : 'subin931',
        database : 'nodejs_study'
        // connectionLimit: 10
    }
);

/* GET users listing. */
router.get('/', function(req, res, next) {

 connection.connect(function(err) {
    if (err) {
        console.error('mysql connection error');
        console.error(err);
        throw err;
    }
    });

    connection.query('SELECT * FROM users',function(err, result, field){
        
      console.log(result[0].id);

      console.log('field : ' + field);
      res.send(result);
    });

    connection.end();
});

module.exports = router;