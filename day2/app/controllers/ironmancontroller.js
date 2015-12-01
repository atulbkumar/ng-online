(function(){
	
	function irondata(){
		this.title = "Ironman";
		this.city = "New York";
		this.fName = "Tony";
		this.lName = "Stark";
		this.photo = "images/ironman.jpg";
		this.power = 6;
		this.movies = 3;
	}
	angular.module("app").controller("ironcontroller",irondata);
}());
