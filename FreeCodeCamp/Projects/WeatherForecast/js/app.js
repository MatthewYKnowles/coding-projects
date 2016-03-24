var app = angular.module('myApp', []);

app.controller('HomeController', function($scope, $http){
    $scope.getLocation = function() {
        navigator.geolocation.getCurrentPosition(function(position) {
            $scope.latitude = position.coords.latitude;
            $scope.longitude = position.coords.longitude;
            $scope.getWeather();
            $scope.$apply();
        });
    };
    $scope.getWeather = function() {
        var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + $scope.latitude + "&lon=" + $scope.longitude + "&APPID=a4d6986dae8ccfd12d6e73a34478539f";
        console.log(url);
        $http.get(url).then(function(response){$scope.weatherData = response.data});
    }
    $scope.getLocation();
});