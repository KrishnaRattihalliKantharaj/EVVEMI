var ejs = require("ejs");
var mysql = require("./mysql");


exports.studentAdd = function(request,response){
	var LastName = request.body.LastName;
	var FirstName = request.body.FirstName;
	var CourseName = request.body.CourseName;
	var FacultyName = request.body.FacultyName;
	var Grade = request.body.Grade;
	var time = request.body.time;
	var query = "insert into evveme.student (LastName,FirstName,CourseName,FacultyName,Grade) values "+"('"+LastName+"','"+FirstName+"','"+CourseName+"','"+FacultyName+"','"+Grade+"')";
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else{
			if(results.length > 0){
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

