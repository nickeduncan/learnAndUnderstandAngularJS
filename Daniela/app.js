var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {

  $scope.handle = 'Hi Daniela';
  $scope.response = '';

  $timeout(function() {
    $scope.handle = "I'm sorry you can't guess my surprise";
  }, 3000);

  $timeout(function() {
    $scope.handle = "But I still like your booty";
  }, 6000);

  $timeout(function() {
    $scope.handle = "May I please see it later?";
  }, 9000);

  $timeout(function() {
    if($filter('lowercase')($scope.response) === "yes") {
      $scope.handle = "It's a date";
    }
  }, 14000);

  $timeout(function() {
    if($filter('lowercase')($scope.response) === "yes") {
      $scope.handle = "Maybe then you can see my surprise"
    }
  }, 16000)


  // $scope.lowercasehandle = function() {
  //   return $filter('lowercase')($scope.handle);
  // }

}]);
