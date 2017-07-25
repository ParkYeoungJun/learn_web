/*
 *   express hello world example
 */

const express = require('express');
const app = express();
const ip = '127.0.0.1';
const port = 1338;

app.get('/home', function (req, res){   // 127.0.0.1:1338/home으로 들어옴
  res.send('hello world');
});

app.get('/login', function (req, res){  // 127.0.0.1:1338/login
  res.send('please login');
});

app.listen(port, ip, function(){
  console.log("hello world server listening on loopback:1338");
});
