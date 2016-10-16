// A simple module with no dependencies
angular.module("templateModule", ['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'menuModule', 'topnavModule'])
    .controller('TemplateCtrl', function ($scope, $timeout, $mdSidenav) {
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