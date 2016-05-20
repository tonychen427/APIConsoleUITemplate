define(function(require) {
	'use strict';

	var demoRoute = require('./demo-route');

	var routeConfig = function($routeProvider) {
		$routeProvider
			.when('/home', demoRoute);
	};

	routeConfig.$inject = ['$routeProvider'];

	return routeConfig;
});
