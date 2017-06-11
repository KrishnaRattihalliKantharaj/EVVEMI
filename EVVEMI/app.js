
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , main = require('./routes/main')
  , course = require('./routes/course')
  , student = require('./routes/student')
  , details = require('./routes/details') 
  , session = require('client-sessions')
  , path = require('path');

var app = express();

// Session implementation
app.use(session({   
	  
	cookieName: 'session',    
	secret: 'cmpe273_test_string',    
	duration: 30 * 60 * 1000,    //setting the time for active session
	activeDuration: 5 * 60 * 1000,  })); // setting time for the session to be active when the window is open // 5 minutes set currently


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.post('/signin', main.signin);
app.post('/courseAdd',course.courseAdd);
app.post('/studentAdd',student.studentAdd);
app.post('/details',details.details);
app.post('/studentDetails',details.studentDetails);

app.post('/courseDetails',details.courseDetails);
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/success',main.loadMainPage);
app.get('/addCourse',main.addCourse);
app.get('/addStudentDetails',main.addStudentDetails);
app.get('/showDetails',main.showDetails);
app.get('/loadStudent',details.loadStudent);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
