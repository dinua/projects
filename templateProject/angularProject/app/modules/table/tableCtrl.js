var myApp = angular.module('tableModule', ['AuthService']);

myApp.controller('TableCtrl', ['$scope', 'UserLogged', '$state', function ($scope, UserLogged, $state) {

    var user = UserLogged.getUser();
    console.log(user);


}]);