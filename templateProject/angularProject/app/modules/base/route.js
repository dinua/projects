//'use strict';
//
//angular.module('app', ['ngRoute'])
//
//    .config(['$routeProvider', function ($routeProvider) {
//        $routeProvider
//            .when('/login', {
//                templateUrl: 'modules/register/login/login.html',
//                controller: 'LoginCtrl',
//                controllerAs: 'c'
//            });
//
//
//    }]);
//

'use strict';
var route = angular.module('routeModule', ['ui.router']);

route.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'modules/register/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'c'
        })
        .state('dashboard', {
            url: '/dashboard',
            views: {
                '': {
                    templateUrl: 'modules/base/template.html',
                    controller: 'TemplateCtrl',
                    controllerAs: 'c'
                },
                'content@dashboard': {
                    templateUrl: 'modules/dashboard/dashboard.html'
                    //controller: 'scotchController'
                },
                'menu@dashboard': {
                    templateUrl: 'modules/menu/menu.html',
                    controller: 'MenuCtrl'
                }
            }

        })
        .state('table', {
            url: '/table',
            views: {
                '': {
                    templateUrl: 'modules/base/template.html',
                    controller: 'TemplateCtrl',
                    controllerAs: 'c'
                },
                'content@table': {
                    templateUrl: 'modules/table/table.html'
                    //controller: 'scotchController'
                },
                'menu@table': {
                    templateUrl: 'modules/menu/menu.html',
                    controller: 'MenuCtrl'
                }
            }

        });
});



