/*
 *  test post parsing
 */

const express = require('express');
const app = express();
const ip = '127.0.0.1';
const port = 1337;
const bodyParser = require('body-parser');

app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended : false})); // 이 앱을 통하는 모든 정보는 bodyparser을 통해 들어옴

app.get('/form', function(req, res){
  res.render('form');
});

app.get('/form_receiver', function(req, res){
  var title = req.query.title;
  var des = req.query.description;

  res.send('title : ' + title + ' des : ' + des);
});

app.post('/form_receiver', function(req, res){

  var title = req.body.title;
  var description = req.body.description;

  res.send(title + ', ' + description);

});

app.listen(port, ip, function(){
  console.log('server open in 127.0.0.1:1337');
});
