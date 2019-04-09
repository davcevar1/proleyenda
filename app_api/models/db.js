var mongoose = require('mongoose');
var gracefulShutdown;
//var dbURI='mongodb://localhost:27017/spam';
var dbURI='mongodb+srv://david:Davidf150.@cluster0-th3tz.mongodb.net/test?retryWrites=true';

mongoose.connect(dbURI,{useNewUrlParser: true});

mongoose.connection.on('connected',function(){
	console.log('Mongoose connected to '+dbURI);
});
mongoose.connection.on('error',function(err){
	console.log('Mongoose connection error:'+err);
});
mongoose.connection.on('disconnected',function(){
	console.log('Mongoose disconnected');
});

gracefulShutdown = function(msg,callback){
	mongoose.connection.close(function(){
		console.log('Mongoose disconnected through ' +msg);
		callback();
	});
};

//reinicio para nodemon
process.once('SIGUSR2', function(){
	gracefulShutdown('nodemon restart',function(){
		process.kill(process.pid, 'SIGUSR2');
	});
});

//terminaci[on de la aplicacion
process.on('SIGINT', function(){
	gracefulShutdown('app termination',function(){
		process.exit(0);
	});
});
//para Heroku
process.on('SIGTERM', function(){
	gracefulShutdown('Heroku app shutdown',function(){
		process.exit(0);
	});
});

require('./historias');
