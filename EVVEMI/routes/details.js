var ejs = require("ejs");
var mysql = require("./mysql");

exports.details = function(request,response){
	var query = "select * from evveme.course";
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else{
			if(results.length > 0){
				response.send({
					"results":results
				});
			}
			else {
				console.log("No courses");
				response.send({
					"results":null
				});
			}
		}
	},query);
};
exports.courseDetails=function(request,response){
	var CourseName = request.body.CourseName;
	console.log("course name:"+CourseName);
	request.session.CourseName = CourseName;
	response.send({"FacultyName":request.session.FacultyName});
//	ejs.renderFile("studentDetails",{"FacultyName":request.session.FacultyName});
};

exports.loadStudent=function(request,response){
	response.render("studentDetails",{"FacultyName":request.session.FacultyName});
};

exports.studentDetails=function(request,response){
	
	var query = "select * from evveme.student where CourseName='"+request.session.CourseName+"'";
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else{
			if(results.length > 0){
				response.send({
					"results":results
				});
			}
			else {
				console.log("No courses");
				response.send({
					"results":null
				});
			}
		}
	},query);
};