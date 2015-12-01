(function(){
	
	function batdata($scope){
		$scope.title = "Batman";
		$scope.city = "Gothem";
		$scope.fName = "Bruce";
		$scope.lName = "Wayne";
		$scope.photo = "images/batman.jpg";
		$scope.power = 7;
		$scope.movies = 3;
	}
	angular.module("app").controller("batcontroller",batdata);
}());
