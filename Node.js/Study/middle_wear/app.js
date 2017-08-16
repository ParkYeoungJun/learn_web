var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');   // 웹 탭에 나오는 이미지
var logger = require('morgan');           // 로그에 나오는 색 등 스타일링
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

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

// app.use(function(req, res, next){           // next는 에러처리로만 사용해야함. 에러로 인식
//   console.log('미들웨어 실행');              // 값을 넘겨주고 싶으면 res.locals.valuename = 'name';
//   next({type: 'value', key: 'output'});
// });

// app.use(function(value, req, res, next){    // console.log(res.locals.valuename);
//   console.log('return value : '+ value.key);
// });

app.use(function(req, res, next){
    console.log('3 parameters');
    next('error');
});

app.use(function(inputData, req, res, next){
    console.log('4 parameters');
    next();
});

app.use('/', index);
app.use('/users', users);

// app.use(function(req, res){
//   console.log('미들웨어 실행');
// });

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
