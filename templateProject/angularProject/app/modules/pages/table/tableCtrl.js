var myApp = angular.module('tableModule', ['AuthService']);

myApp.controller('TableCtrl', ['$scope', 'UserLogged', '$state', function ($scope, UserLogged, $state) {

    var user = UserLogged.getUser();
    console.log(user);
    $scope.foo = [1, 2];

    for (var i = 1; i <= 20; i++) {
        $scope.foo.push(i);
    }

}]);