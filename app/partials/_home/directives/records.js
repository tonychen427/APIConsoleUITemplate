define(function(require) {
	'use strict';

	var template = require('text!../partials/records.html');

	var directive = [function() {
		return {
			restrict: 'E',
			template: template,
			controller: function() { }
                    };
	}];

	directive.id = 'appTitle';

	return directive;
});
