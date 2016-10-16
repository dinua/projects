// A simple module with no dependencies
angular.module("menuModule", ['dashboardModule', 'tableModule'])
    .controller("MenuCtrl", function ($scope, $state) {
        $scope.dashboardButton = function () {
            console.log("go to dashboard");
            $state.go('dashboard');
        }

        $scope.chartButton = function () {
            console.log("go to table");
            $state.go('table');
        }


    });