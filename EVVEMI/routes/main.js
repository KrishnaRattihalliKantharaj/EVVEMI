/**
 * New node file
 */
var ejs = require("ejs");
var mysql = require("./mysql");

exports.signin = function(request,response){
	var emailid = request.body.emailId;
	var password = request.body.password;
	var query = "select emailId,FacultyName from evveme.facultydetails where emailId='"+emailid+"'and password='"+password+"'";
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else{
			if(results.length > 0){
				//Assigning the session
				request.session.emailId = emailid;
				request.session.FacultyName = results[0].FacultyName;
				response.send({
					"result":"200"
				});
			}
			else {
				response.send({"result":"404"});
				console.log("Invalid Login");
				//Send invalid message to the front end
			}
		}
	},query);
}

exports.loadMainPage = function(request,response){
	if(request.session.emailId){
		//Set these headers to notify the browser not to maintain any cache for the page being loaded
		response.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
		response.render("mainPage",{"FacultyName":request.session.FacultyName});
	}
}

exports.addCourse = function(request,response){
	response.render("course",{"FacultyName":request.session.FacultyName});	
}

exports.addStudentDetails = function(request,response){
	var query = "select * from evveme.course";
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else{
			if(results.length > 0){
				//Assigning the session
				request.session.results=results;
			}
			else {
				console.log("no Courses");
			}
		}
	},query);
	response.render("students",{"FacultyName":request.session.FacultyName,"results":request.session.results});	
}

exports.showDetails = function(request,response){
	response.render("details",{"FacultyName":request.session.FacultyName});	
}