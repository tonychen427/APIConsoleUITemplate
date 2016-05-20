require.config({
	baseUrl: 'scripts',

	paths: {
		'angular': '../lib/bower/angular/angular',
		'angular.route': '../lib/bower/angular-route/angular-route',
        'angularUI.route': '../lib/bower/angular-ui-router/release/angular-ui-router',
		'underscore': '../lib/bower/lodash/lodash',

		'log': 'logging/console-logger',

		'text': '../lib/bower/requirejs-text/text',

		'partials': '../partials',

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
		'angularUI.route': ['angular'],
        'bootstrap': ['jquery'],
        'adminLTE': ['jquery'],
        'baseExtra': ['jquery'],
        'jquery.ui': ['jquery']
	}
});
