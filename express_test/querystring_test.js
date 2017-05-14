/*
 *  test querystring parsing
 */

const express = require('express');
const app = express();
const ip = '127.0.0.1';
const port = 1337;

app.locals.pretty = true;

app.use(express.static('public'));

app.get('/topic', function(req,res){  // /topic/:id로 하면 /topic/2라 하면 자동으로 id = 2로 입력됨
  // res.send(req.query.id+ ',' + req.query.name);   // req.query.id == 사용자가 request한 query의 id값

  var topics = [        // 배열 선언
    'javascript is ...',
    'nodejs is ...',
    'express is ...'
  ];

// 링크생성
  var links = `
    <a href = "/topic?id=0">JavaScript</a><br>
    <a href = "/topic?id=1">Node.js</a><br>
    <a href = "/topic?id=2">Express</a><br><br>
    ${topics[req.query.id]}
  `

  res.send(links);
});

app.listen(port, ip, function(){
  console.log('server open in 127.0.0.1:1337');
});
