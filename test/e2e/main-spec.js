'use strict';

describe('loginPortal', function() {
	it('should redirect to #/home', function() {
		browser.get('/');

		browser.getLocationAbsUrl().then(function(url) {
			expect(url).toBe('/home');
		});
	});
});
