define(function(require) {
	'use strict';

	var angular = require('angular'),
		demoModule = require('demo/demo-module'),
		routeConfig = require('routes/route-config');
		//homeModule = require('_home/modules/records');
		//uiRouteConfig = require('routes/ui-route-config');

	require('angular.route');
	require('angularUI.route');
    require('jquery');
    require('jquery.ui');
    require('bootstrap');
    require('adminLTE');

	// var app = angular.module('loginPortal', [
	// 	'ui.router',
	// 	homeModule.name
	// ]);
	// app.config(uiRouteConfig);
	var app = angular.module('loginPortal', [
		'ngRoute', 'ui.router',
		demoModule.name
	]);
	app.config(routeConfig);
	return app;
});
