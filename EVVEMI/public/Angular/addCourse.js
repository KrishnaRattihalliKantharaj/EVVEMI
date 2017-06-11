var app = angular.module('myApp',[]);
app.controller('mainController',function($scope,$http){
	$scope.Course = function(){
		$http({
			url:"/courseAdd",
			method:"POST",
			data:{
				"CourseName":$scope.CourseName,
				"FacultyName":$scope.FacultyName,
				"time":$scope.time
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