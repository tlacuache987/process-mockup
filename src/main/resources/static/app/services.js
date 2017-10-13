(function(angular) {

	angular.module("myApp.services").factory("ProcessStatusService", ProcessStatusService);
	angular.module("myApp.services").factory("ConfigService", ConfigService);

	function ProcessStatusService($http, $q) {

		var service = this;
		
		return service;
	};
	
	function ConfigService($http, $q) {

		var service = this;
		
		return service;
	};

}(angular));