define(function(require) {
    'use strict';

    var $ = require('jquery');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100 && !$('header.extra').hasClass('open')) {
            $('header.extra').addClass('open');
            $('header.extra').slideDown();
        } else if ($(this).scrollTop() <= 100) {
            $('header.extra').removeClass('open');
            $('header.extra').slideUp();
        }
    });
});
