const express = require('express');
const app = express();
const ip = '127.0.0.1';
const port = '1337';

app.use(express.static('public')); // 정적인 파일이 위치할 directory 지정
                                   // 127.0.0.1:1337/sinjjang.png

app.get('/home', function (req, res){
  res.send('hello static file\'s home');
});

app.get('/dynamic', function (req, res){

  var lis = '';
  for(var i = 0 ; i < 5 ; ++i){
    lis += '<li> coding </li>';
  }

  var time = Date();    // javascript의 시간 api

  var output =
   // ''가 아닌 1옆의 '', ${}는 변수라는걸 알려줌
  `<!DOCTYPE HTML>
  <html>
    <head>
      <meta charset = "utf-8">
      <title>
        dynamic test
      </title>
    </head>
    <body>
      hello, dynamic!
      <ul>
        ${lis}
      </ul>
        ${time}
    </body>
  </html>`

  res.send(output);
});

app.get('/image', function (req, res){
  res.send('Hello sinjjang, <img src = "/sinjjang.png">');
});

app.listen(port, ip, function(){
  console.log('server open in 127.0.0.1:1337');
});
