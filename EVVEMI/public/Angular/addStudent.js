var app = angular.module('myApp',[]);
app.controller('mainController',function($scope,$http){
	$scope.Student = function(){
		$http({
			url:"/studentAdd",
			method:"POST",
			data:{
				"LastName":$scope.LastName,
				"FirstName":$scope.FirstName,
				"CourseName":$scope.CourseName,
				"FacultyName":$scope.FacultyName,
				"Grade":$scope.Grade
			}
		}).success(function(data){
			if(data.result==="200"){
				$scope.result="Succesfully Inserted";
			}else if(data.result==="400"){
				$scope.result="Failed to Insert";
			}
		});
	};
});