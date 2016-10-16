// A simple module with no dependencies
angular.module("templateModule", ['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'menuModule'])
    .controller('TemplateCtrl', function ($scope, $timeout, $mdSidenav, $location) {
        $scope.toggleLeft = buildToggler('left');

        $scope.name = "asdasd";
        $scope.foo = [1, 2];

        for (var i = 1; i <= 10; i++) {
            $scope.foo.push(i);
        }


        //$scope.toggleRight = buildToggler('right');

        function buildToggler(componentId) {
            return function () {
                $mdSidenav(componentId).toggle();
            }
        }


    });