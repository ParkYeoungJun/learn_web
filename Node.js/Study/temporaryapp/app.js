var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');   // 웹 탭에 나오는 이미지
var logger = require('morgan');           // 로그에 나오는 색 등 스타일링
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var mysql = require('mysql');

var connection = mysql.createConnection({
    host    :'localhost',
    port : 3307,
    user : 'root',
    password : 'subin931',
    database:'nodejs_study'
});

connection.connect(function(err) {
    if (err) {
        console.error('mysql connection error');
        console.error(err);
        throw err;
    }
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
  console.log('미들웨어 실행');
  next({type: 'value', key: 'output'});
});

app.use(function(value, req, res, next){
  console.log('return value : '+ value.key);
});

app.use('/', index);
app.use('/users', users);

// app.use(function(req, res){
//   console.log('미들웨어 실행');
// });


app.get('/sql', function(req,res){
    var query = connection.query('select * from test',function(err, result){
        console.log(rows);
        res.json(rows);
    });
    console.log(query);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
