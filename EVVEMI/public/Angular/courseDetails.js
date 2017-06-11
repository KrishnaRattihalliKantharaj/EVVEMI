var app = angular.module('myApp',[]);
app.controller('mainController',function($scope,$http){
	$http({
		url:"/details",
		method:"POST",
	}).success(function(data){
		if(data.results!==null){
			$scope.results=data.results;
		}else{
			alert("No data in course record");
		}
	});
	$scope.viewCourseDetails=function(CourseName){
		console.log("course name:"+CourseName);
		$http({
			url:"/courseDetails",
			method:"POST",
			data:({
				"CourseName":CourseName
			})
			}).success(function(data){
				window.location = "/loadStudent";
		});
	};
});