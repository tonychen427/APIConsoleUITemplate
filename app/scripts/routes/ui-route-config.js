define(function(require) {
    'use strict';
    var routeConfig = ['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/route1');
            $stateProvider
                    .state('route1', {
                        url: '/route1',
                        template: require('text!partials/route1.html')
                    })
                    .state('route1.list', {
                        url: '/list',
                        template: '<h1 ng-repeat="x in records">{{x}}</h1>',
                        controller: require('_home/controllers/records')
                    })
                    .state('route2', {
                        url: '/route2',
                        template: require('text!partials/partial2.html'),
                        controller: require('_home/controllers/create')
                    })
                    .state('route2.list', {
                        url: '/list',
                        templateUrl: 'route2.list.html',
                        controller: ['$scope', function($scope) {
                                $scope.things = ['A', 'Set', 'Of', 'Things'];
                            }]
                    })
                    .state('apiExplorer', {
                        url: '/apiExplorer',
                        template: require('text!partials/apiExplorer.html'),
                        controller: ['$scope', function($scope) {
                                $scope.things = ['A', 'Set', 'Of', 'Things'];
                            }]
                    })
                    .state('apiExplorer.login', {
                        url: '/login',
                        template: require('text!_apiExplorer/partials/login.html'),
                        controller: ['$scope', function($scope) {
                                $scope.things = ['A', 'Set', 'Of', 'Things'];
                            }]
                    })
                    .state('apiExplorer.logout', {
                        url: '/logout',
                        template: require('text!_apiExplorer/partials/logout.html'),
                        controller: ['$scope', function($scope) {
                                $scope.things = ['A', 'Set', 'Of', 'Things'];
                            }]
                    })
                    .state('documentation', {
                        url: '/documentation',
                        template: require('text!partials/documentation.html'),
                        controller: ['$scope', function($scope) {
                                $scope.things = ['A', 'Set', 'Of', 'Things'];
                            }]
                    })
                    .state('documentation.java', {
                        url: '/java',
                        template: require('text!_documentation/partials/java.html'),
                        controller: ['$scope', function($scope) {
                                $scope.things = ['A', 'Set', 'Of', 'Things'];
                            }]
                    })
                    .state('documentation.android', {
                        url: '/android',
                        template: require('text!_documentation/partials/android.html'),
                        controller: ['$scope', function($scope) {
                                $scope.things = ['A', 'Set', 'Of', 'Things'];
                            }]
                    })
                    .state('documentation.ios', {
                        url: '/ios',
                        template: require('text!_documentation/partials/ios.html'),
                        controller: ['$scope', function($scope) {
                                $scope.things = ['A', 'Set', 'Of', 'Things'];
                            }]
                    }).state('reference', {
                        url: '/reference',
                        template: require('text!partials/reference.html'),
                        controller: ['$scope', function($scope) {
                                $scope.things = ['A', 'Set', 'Of', 'Things'];
                            }]
                    }).state('reference.brandingGuide', {
                        url: '/brandingGuide',
                        template: require('text!_reference/partials/brandingGuide.html'),
                        controller: ['$scope', function($scope) {
                                $scope.things = ['A', 'Set', 'Of', 'Things'];
                            }]
                    });
        }];

    return routeConfig;
});
