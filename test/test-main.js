'use strict';

var allTestFiles = ['angular.mocks'];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
	return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
	if (TEST_REGEXP.test(file)) {
		// Normalize paths to RequireJS module names.
		allTestFiles.push(pathToModule(file));
	}
});

require.config({
	// Karma serves files under /base, which is the basePath from your config file
	baseUrl: '/base/app/scripts',

	paths: {
		'angular': '../lib/bower/angular/angular',
		'angular.route': '../lib/bower/angular-route/angular-route',
		'angularUI.route': '../lib/bower/angular-ui-router/release/angular-ui-router',

		'underscore': '../lib/bower/lodash/lodash',

		'log': 'logging/console-logger',

		'text': '../lib/bower/requirejs-text/text',

		'partials': '../partials',

		'test': '../../test',

		'angular.mocks': '../lib/bower/angular-mocks/angular-mocks',

		'jquery': '../lib/bower/jquery/dist/jquery',

        'jquery.ui': '../lib/bower/jquery-ui/jquery-ui',

        'bootstrap': '../lib/bower/bootstrap/dist/js/bootstrap',

        'adminLTE': '../lib/customize/adminlte-bower/dist/js/app',

        'baseExtra': '../scripts/utilities/extra'
	},

	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular.route': ['angular'],
		'angular.mocks': {
			deps: ['angular'],
			exports: 'angular.mock'
		},
		'angularUI.route': ['angular'],
        'bootstrap': ['jquery'],
        'adminLTE': ['jquery'],
        'baseExtra': ['jquery'],
        'jquery.ui': ['jquery']
	},

	// dynamically load all test files
	deps: allTestFiles,

	// we have to kickoff jasmine, as it is asynchronous
	callback: window.__karma__.start
});
