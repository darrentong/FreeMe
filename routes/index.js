var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: 'FreeMe' });
});

/* POST to Calendar Rendering */
router.post('/calendar', function(req, res) {
	var conn = new Mongo();
	conn.load("syllabus_orig.js");
	
	var collection = db.getCollection("syllabus.js");
    });

module.exports = router;
