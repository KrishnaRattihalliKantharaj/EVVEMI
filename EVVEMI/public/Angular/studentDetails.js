var app = angular.module('myApp',[]);
app.controller('mainController',function($scope,$http){
	$http({
		url:"/studentDetails",
		method:"POST"
	}).success(function(data){
		if(data.results!==null){
			$scope.results=data.results;
		}else{
			alert("No data in course record");
		}
	});
	$scope.deleteStudnet=function(FirstName,CourseName){
		$http({
			url:"/deleteStudentRecord",
			method:"POST",
			data:({
				"FirstName":FirstName,
				"CourseName":CourseName
			})
		}).success(function(data){
			if(data.results === "200"){
				$scope.deleteStudent="Successfully deleted Student record";
				setTimeout(function(){window.location.reload(1);}, 500);
			}
		});
	};
	
	$scope.updateDetails=function(FirstName,CourseName,LastName,FacultyName,Grade){
		$http({
			url:"/updateDetails",
			method:"POST",
			data:({
				"FirstName":FirstName,
				"LastName":LastName,
				"CourseName":CourseName,
				"FacultyName":FacultyName,
				"Grade":Grade
			})
		}).success(function(data){
			window.location = "/getUpdateddetails";
		});
	};
});