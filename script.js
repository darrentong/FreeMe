var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000');

var db = mongoose.connection;
