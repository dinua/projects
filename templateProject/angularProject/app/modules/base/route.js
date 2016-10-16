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
        });
    //.state('dashboard', {
    //    url: '/dashboard',
    //    views: {
    //        '': {
    //            templateUrl: 'modules/app/dashboard/dashboard.html',
    //            controller: 'DashboardCtrl',
    //            controllerAs: 'c',
    //        },
    //        'columnTwo@dashboard': {
    //            templateUrl: 'modules/app/dashboard/view1.html'
    //            //controller: 'scotchController'
    //        }
    //    }
    //
    //})
    //.state('dashboard.view2', {
    //    url: '/dashboard.view2',
    //    views: {
    //        '': {
    //            templateUrl: 'modules/app/dashboard/dashboard.html',
    //            controller: 'DashboardCtrl',
    //            controllerAs: 'c',
    //        },
    //        'columnTwo@dashboard': {
    //            templateUrl: 'modules/app/dashboard/view2.html'
    //            //controller: 'scotchController'
    //        }
    //    }
    //
    //});

    //$stateProvider.state(aboutState);
});



