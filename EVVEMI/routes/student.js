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

exports.deleteStudentRecord = function(request,response){
	var FirstName = request.body.FirstName;
	var CourseName = request.body.CourseName;
	var query = "delete from evveme.student where FirstName='"+FirstName+"' and CourseName='"+CourseName+"'"; 
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else{
			if(results.length > 0){
				response.send({
					"results":"400"
				});
			}
			else {
				response.send({"results":"200"});
			}
		}
	},query);
};

exports.updateDetails = function(request,response){
	request.session.FirstName =request.body.FirstName;
	request.session.LastName =request.body.LastName;
	request.session.CourseName =request.body.CourseName;
	request.session.FacultyName =request.body.FacultyName;
	request.session.Grade =request.body.Grade;
	response.send({"results":"200"});
};

exports.getUpdateddetails=function(request,response){
	response.render("updatePage",{"FirstName":request.session.FirstName,"LastName":request.session.LastName,"CourseName":request.session.CourseName,"FacultyName":request.session.FacultyName,"Grade":request.session.Grade});
};

exports.updateStudentDetails=function(request,response){
	var FirstName =request.body.FirstName;
	var LastName =request.body.LastName;
	var CourseName =request.body.CourseName;
	var FacultyName =request.body.FacultyName;
	var Grade =request.body.Grade;
	console.log("FirstName:"+FirstName);
	var query = "update evveme.student set FirstName='"+FirstName+"',LastName='"+LastName+"',CourseName='"+CourseName+"',FacultyName='"+FacultyName+"',Grade='"+Grade+"' where FirstName='"+request.session.FirstName+"' and CourseName='"+CourseName+"'";
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else{
			if(results.length > 0){
				console.log("Could not update")
			}
			else {
				response.render("updatePage",{"FirstName":FirstName,"LastName":LastName,"CourseName":CourseName,"FacultyName":FacultyName,"Grade":Grade});
			}
		}
	},query);
};