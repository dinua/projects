var myApp = angular.module('dashboardModule', ['AuthService', 'chart.js']);

myApp.controller('DashboardCtrl', ['$scope', 'UserLogged', '$state', function ($scope, UserLogged, $state) {

    var user = UserLogged.getUser();
    console.log(user);

    $scope.colors = ['#0000ff', '#000000'];
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];

    $scope.datasetOverride = [{yAxisID: 'y-axis-1'}, {yAxisID: 'y-axis-2'}];
    $scope.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left',
                    hoverBorderColor: "rgba(255,99,132,1)"
                },
                {
                    id: 'y-axis-2',
                    type: 'linear',
                    display: true,
                    position: 'right'
                }
            ]
        }
    };

    $scope.labels2 = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    $scope.data2 = [300, 500, 100, 40, 120];

    $scope.onClick = function (points, evt) {
        console.log(points, evt);
        console.log(points[0]);
    };


}]);