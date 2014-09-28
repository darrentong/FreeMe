var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { });
    });

/* POST to Calendar Rendering */
router.post('/calendar', function(req, res) {
	res.render('calendar', { });
	var db = req.db;
	// Get body of class file
	var str = req.body.classes;
	
    });

module.exports = router;
