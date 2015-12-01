(function(){
	 angular.module("app")
			.config(function($routeProvider){
		// alert("i will stop angular from continuing");
		$routeProvider
		.when("/", {
			controller : "homecontroller",
			template : "<div><h1>{{ title }} <span>{{ city }}</span></h1> <h3>{{ subtitle }}</h3></div>"
		})
		.when("/batman", {
			controller : "batcontroller",
			template : "<div><h1>{{ title }} <span>{{ city }}</span></h1> <img src='{{photo}}'/></div>"
		})
		.when("/ironman", {
			controller : "ironcontroller as iron",
			template : "<div><h1>{{ iron.title }} <span>{{ iron.city }}</span></h1> <img src='{{iron.photo}}'/></div>"
		});
		/*
		.when("/ironman", {
			controller : "ironcontroller",
			controllerAs : "iron",
			template : "<div><h1>{{ iron.title }} <span>{{ iron.city }}</span></h1> <img src='{{iron.photo}}'/></div>"
		});
		 */
	});
}());
