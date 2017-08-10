var express = require('express');
var router = express.Router();      // thread와 비슷하게 따로 돌아가는 미니서버

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;