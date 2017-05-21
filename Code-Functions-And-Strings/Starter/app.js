var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {

});

var searchPeople = function(firstname, lastname, height, age, occupation)
{
  return 'Jane Doe';
}

// console.log(searchPeople(1,2,3,4,5));
var searchPeopleString = searchPeople.toString();
// console.log(searchPeople);
console.log(searchPeopleString);
