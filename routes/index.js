var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: 'FreeMe' });
});

/* POST to Calendar Rendering */
router.post('/calendar', function(req, res) {
	
	var db = req.db;

	// Get body of class file
	var str = req.body.classes;
	console.log(str);
	var arr = str.trim().split(",");
	var hash = {};
	
	var collection = db.get('syllabus');

	var hash = {};
	for (i=0; i < arr.length; i++) {
	    collection.find({catalogId: arr[i]},{},function(e, docs){
	    	var docsKeys = Object.keys(docs);
	    	for(j=0; j<docsKeys.length; j++) {
	    		if(docs[j].hasOwnProperty('assignment')) {
	    			currentAssignments = docs[j].assignment;
	    			for(k=0; k<currentAssignments.length; k++) {
	    				if(hash[currentAssignments[k].dueDate] === undefined) {
	    					hash[currentAssignments[k].dueDate] = {};
	    					hash[currentAssignments[k].dueDate][currentAssignments[k].name] = 1;
	    				}
	    				else {
	    					hash[currentAssignments[k].dueDate][currentAssignments[k].name] = 1;
	    				}
	    			}
	    		}

	    		if(docs[j].hasOwnProperty('quiz')) {
	    			currentQuizzes = docs[j].quiz;
	    			for(k=0; k<currentQuizzes.length; k++) {
	    				if(hash[currentQuizzes[k].dueDate] === undefined) {
	    					hash[currentQuizzes[k].dueDate] = {};
	    					hash[currentQuizzes[k].dueDate][currentQuizzes[k].name] = 2;
	    				}
	    				else {
	    					hash[currentQuizzes[k].dueDate][currentQuizzes[k].name] = 2;
	    				}
	    			}
	    		}

	    		if(docs[j].hasOwnProperty('exam')) {
	    			currentExams = docs[j].exam;
	    			for(k=0; k<currentExams.length; k++) {
	    				if(hash[currentExams[k].dueDate] === undefined) {
	    					hash[currentExams[k].dueDate] = {};
	    					hash[currentExams[k].dueDate][currentExams[k].name] = 5;
	    				}
	    				else {
	    					hash[currentExams[k].dueDate][currentExams[k].name] = 5;
	    				}
	    			}
	    		}

	    	}

		});
		res.render('calendar', { 
	    	"workload" : hash
	    });
	}
	
	
    });

module.exports = router;
