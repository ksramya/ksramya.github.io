

/* Root Controller */
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
		$routeProvider
		.when("/", {
			controller : 'rootController',
			templateUrl : "main.html"
		})
		.when("/portfolio", {
			controller : 'rootController',
			templateUrl : "portfolio.html"
		})
		.when("/about", {
			controller : 'rootController',
			templateUrl : "about.html"
		})
		.when("/contact", {
			controller : 'rootController',
			templateUrl : "contact.html"
		});
	});
app.controller('rootController', function ($scope) {	  
	$scope.showContent = true;
	
	$scope.showContent= function()
	{
    $scope.showContent = true;
	};
	$scope.hideContent= function()
	{
    $scope.showContent = false;
	};
  });