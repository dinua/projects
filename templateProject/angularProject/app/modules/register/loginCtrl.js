var myApp = angular.module('loginModule', ['AuthService', 'dashboardModule']);

myApp.controller('LoginCtrl', ['$scope', 'UserLogged', '$state', function ($scope, UserLogged, $state) {

    $scope.message = 'test Adi';

    $scope.registerButton = function () {
        console.log("button");
    }

    $scope.loginButton = function () {
        console.log("button");
        var user = {};
        user.name = 'John Doe';
        user.email = 'JohnDoe@email.com';
        console.log (user);
        UserLogged.setUser(user);
        $state.go('dashboard');
    }

}]);