(function(){
'use strict';

angular.module('lotrt')
.controller('PageCtrl', function($scope, $http, FIREBASE_URL, $pageArray){
$scope.pageItems = $pageArray(ref, 'number');
var ref = new Firebase(FIREBASE_URL + '/newGroup')
});
//end controller




})();





// $scope.number = ($scope.$index + 1) + ($scope.currentPage - 1) * $scope.pageSize;

//   $scope.newGroup = [];
//   $scope.totalNewGroup = 0;
//   $scope.newGroupPerPage = 5; // this should match however many results your API puts on one page
//   getResultsPage(1);
//
//   $scope.pagination = {
//       current: 1
//   };
//
//   $scope.pageChanged = function(newPage) {
//       getResultsPage(newPage);
//   };
//
//   function getResultsPage(pageNumber) {
//       // this is just an example, in reality this stuff should be in a service
//       $http.get(FIREBASE_URL + '/list/groups' + pageNumber)
//           .then(function(result) {
//               $scope.newGroup = result.data.newGroup;
//               $scope.totalNewGroup = result.data.Count
//
// });
//
// };
