var myApp = angular.module('dashboardModule', ['AuthService']);

myApp.controller('DashboardCtrl', ['$scope', 'UserLogged', '$state', function ($scope, UserLogged, $state) {

    var user = UserLogged.getUser();
    console.log(user);


}]);