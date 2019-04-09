var mongoose = require('mongoose');

var Historia = mongoose.model('Mariangula');


//// Historias

var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
}
