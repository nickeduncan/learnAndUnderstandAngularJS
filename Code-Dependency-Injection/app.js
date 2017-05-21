// var person = function(firstname, lastname) {
//
//   this.firstname = firstname;
//   this.lastname = lastname;
//
// }
//
// // function logPerson()
// // {
// //   var john = new Person('John', 'Doe');
// //   console.log(john);
// // }
// function logPerson(person)
// {
//   console.log(person);
// }
//
// var john = new Person('John', 'Doe');
// logPerson(john);

var myApp = angular.module('myApp', []);
myApp.controller('mainController', function($scope) {

  $scope.name = "Jane Doe";
  $scope.occupation = "Coder";

  $scope.getname = function() {
    return "John Doe";
  }

  $scope.getname();
  
  console.log($scope);

});
