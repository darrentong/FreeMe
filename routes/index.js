var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: 'FreeMe' });
});

/* POST to Calendar Rendering */
router.post('/calendar', function(req, res) {
	res.render('calendar', { });
	var db = req.db;

	// Get body of class file
	var str = req.body.classes;
	var arr = str.trim().split(",");
	var hash = {};
	
	var collection = db.get('syllabus');

	for (i=0; i < arr.length; i++) {
	    var json = collection.find({catalogId: arr[i]});
	    console.log(json.classRoom);

	}
	
	
    });

module.exports = router;
