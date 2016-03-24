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
        $http.get(url).then(function(response){
            $scope.weatherData = response.data;
            $scope.currentTempF = $scope.weatherData["main"]["temp"] * 9 / 5 - 459.67;
            $scope.currentTempC = $scope.weatherData["main"]["temp"] - 273.15;
            $scope.weatherIconUrl = "http://openweathermap.org/img/w/" + $scope.weatherData["weather"][0]["icon"] + ".png";
            $scope.weatherDescription = $scope.weatherData["weather"][0]["description"];
            $scope.currentDegreeMeasurement = "Fahrenheit";
            $scope.currentTemperature = $scope.currentTempF;
            $scope.otherDegreeMeasurement = "Celsius";
            $scope.windSpeed = $scope.weatherData["wind"]["speed"];
            $scope.humidity = $scope.weatherData["main"]["humidity"];
        });
    }
    $scope.changeDegreeMeasurement = function() {
        if ($scope.currentDegreeMeasurement === "Fahrenheit") {
            $scope.currentDegreeMeasurement = "Celsius";
            $scope.otherDegreeMeasurement = "Fahrenheit";
            $scope.currentTemperature = $scope.currentTempC;
        } else {
            $scope.currentDegreeMeasurement = "Fahrenheit";
            $scope.otherDegreeMeasurement = "Celsius";
            $scope.currentTemperature = $scope.currentTempF;
        }
    }
    $scope.getLocation();
});