define(function(require) {
    'use strict';

     require('../directives/records');
     //require('../../../app');

     var createCtl = ['$scope',  function($scope) {
            console.log($scope);
         }];

     return createCtl;
});
