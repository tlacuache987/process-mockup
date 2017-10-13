(function(angular) {
	
	angular.module("myApp.controllers", []);
	
	angular.module("myApp.services", []);
	
	angular.module("myApp", [ 'ui.bootstrap', "ngResource", "myApp.controllers", "myApp.services" ]);
	
}(angular));