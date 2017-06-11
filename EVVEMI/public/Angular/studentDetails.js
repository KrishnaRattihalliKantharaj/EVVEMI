var app = angular.module('myApp',[]);
app.controller('mainController',function($scope,$http){
	$http({
		url:"/studentDetails",
		method:"POST",
	}).success(function(data){
		if(data.results!==null){
			$scope.results=data.results;
		}else{
			alert("No data in course record");
		}
	});
});