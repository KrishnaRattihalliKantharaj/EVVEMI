var ejs = require("ejs");
var mysql = require("./mysql");


exports.courseAdd = function(request,response){
	var CourseName = request.body.CourseName;
	var FacultyName = request.body.FacultyName;
	var time = request.body.time;
	var query = "insert into evveme.course (CourseName,FacultyName) values "+"('"+CourseName+"','"+FacultyName+"')";
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else{
			if(results.length > 0){
				//Assigning the session
				response.send({
					"result":"400"
				});
			}
			else {
				response.send({"result":"200"});
			}
		}
	},query);
}