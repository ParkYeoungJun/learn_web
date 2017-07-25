const express = require('express');
const app = express();
const ip = '127.0.0.1';
const port = '1337';

app.use(express.static('public')); // 정적인 파일이 위치할 directory 지정
                                   // 127.0.0.1:1337/sinjjang.png

app.get('/home', function (req, res){
  res.send('hello static file\'s home');
});

app.get('/image', function (req, res){
  res.send('Hello sinjjang, <img src = "/sinjjang.png">');
});

app.listen(port, ip, function(){
  console.log('server open in 127.0.0.1:1337');
});
