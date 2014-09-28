var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: 'FreeMe' });
});

router.get('/home', function(req, res) {
	res.render('calendarHome', { });
});

module.exports = router;
