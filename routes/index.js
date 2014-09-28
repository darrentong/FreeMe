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
	
	var arr = str.trim().split(",");
	var hash = new Object();
	
	var collection = db.get('syllabus');

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
	    					hash[currentExams[k].dueDate][currentExams[k].name] = 6;
	    				}
	    				else {
	    					hash[currentExams[k].dueDate][currentExams[k].name] = 6;
	    				}
	    			}
	    		}

	    		if(docs[j].hasOwnProperty('misc')) {
	    			currentMisc = docs[j].misc;
	    			for(k=0; k<currentMisc.length; k++) {
	    				if(currentMisc[k].name.match(/(P|p)roj/) != null ||
	    					currentMisc[k].name.match(/(E|e)ssay/) != null ||
	    					currentMisc[k].name.match(/(R|r)eport/) != null ||
	    					currentMisc[k].name.match(/(P|p)aper/) != null) {
	    					if(hash[currentMisc[k].dueDate] === undefined) {
		    					hash[currentMisc[k].dueDate] = {};
		    					hash[currentMisc[k].dueDate][currentMisc[k].name] = 5;
		    				}
		    				else {
		    					hash[currentMisc[k].dueDate][currentMisc[k].name] = 5;
		    				}
	    				}
	    				else if(currentMisc[k].name.match(/(A|a)ssignment/) != null ||
		    					currentMisc[k].name.match(/(H|h)omework/) != null ||
		    					currentMisc[k].name.match(/(W|w)riting/) != null ||
		    					currentMisc[k].name.match(/(J|j)ournal/) != null) {
	    					if(hash[currentMisc[k].dueDate] === undefined) {
		    					hash[currentMisc[k].dueDate] = {};
		    					hash[currentMisc[k].dueDate][currentMisc[k].name] = 1;
		    				}
		    				else {
		    					hash[currentMisc[k].dueDate][currentMisc[k].name] = 1;
		    				}
	    				}
	    			}
	    		}
	    		
	    	}
	    	
	    	var jsonArray = [];
	    	var z = 0;

	    	for (var date in hash) {
	    		if (hash.hasOwnProperty(date)) {
	    			for (var assign in hash[date]) {
	    				if (hash[date].hasOwnProperty(assign)) {
	    					var yesterday = new Date(date);
							yesterday.setDate(yesterday.getDate() - 1);
							var start = new Date(date);
							start.setDate(start.getDate() - hash[date][assign] - 1);

	    					jsonArray[z] = {
	    						title: assign,
         						start: start.toISOString().substring(0,10),
          						end: yesterday.toISOString().substring(0,10),
          						backgroundColor: '#2980b9',
          						borderColor: '#2980b9'
	    					};

	    					z = z + 1;
	    				}
	    			}
	    			
	    		}
	    	}
	    	console.log(jsonArray);
	    	res.render('calendar', { 
			    	"jsonArray" : jsonArray
			    });
			
			
		});
		
	}

	
	
});

module.exports = router;
