var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {

  $scope.name = 'Nick';

  $timeout(function() {

    $scope.name = 'Everybody';

  }, 3000);

}]);
