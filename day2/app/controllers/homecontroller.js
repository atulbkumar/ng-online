(function(){
	
	function homedata($scope){
		$scope.title = "My Application";
		$scope.city = "Bangalore";
		$scope.subtitle = "welcome to my app";
	}
	
	angular.module("app").controller("homecontroller",homedata);
}());
