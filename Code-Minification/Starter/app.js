var myApp = angular.module('myApp', []);

// myApp.controller('mainController', function($scope, $log) {
//
//   $log.info($scope);
//
// });

// myApp.controller("mainController",function(n,o){o.info(n)});

// myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
//
//   $log.info($scope);
//
// }]);

// myApp.controller("mainController",["$scope","$log",function(o,n){n.info(o)}]);

myApp.controller('mainController', ['$scope', '$log', function($log, $scope) {

  // $log.info($scope);
  console.log($scope);

}]);
