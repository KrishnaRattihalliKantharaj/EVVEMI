/**
 * New node file
 */
var app = angular.module('myApp',[]);
app.controller('mainController',function($scope,$http){
	$scope.logIn = function(){
		$http({
			url : "/signin",
			method:"POST",
			data: {
				"emailId":$scope.emailAddress,
				"password":$scope.password
			}
		}).success(function(data){
			if(data.result=="200"){
				console.log("success login");
				window.location = "/success";
			}
		});
	}
})
