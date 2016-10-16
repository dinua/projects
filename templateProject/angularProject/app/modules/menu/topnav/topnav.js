angular.module('topnavModule', ['ui.bootstrap', 'AuthService'])
    .directive('topnav', function () {
        return {
            templateUrl: 'modules/menu/topnav/topnav.html'
        };
    })
    .controller("TopnavCtrl", ['$scope', 'UserLogged', '$state', function ($scope, UserLogged, $state) {
        $scope.name = UserLogged.getUser().name;
    }]);