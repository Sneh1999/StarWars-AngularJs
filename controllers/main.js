angularApp.controller('MainCtrl', [
    '$scope',
    'SwapiService',
    function ($scope, SwapiService) {
        $scope.heading = "Hello World";
        $scope.message = "This is me";

        SwapiService.people()
            .then(function (data) {
                console.log(data);
                
            });

    }
]);