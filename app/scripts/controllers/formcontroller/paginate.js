// (function(){
//   'use strict';
//
//   angular.module('lotrt')
//   .controller('PageCtrl', function(FIREBASE_URL, $http){
//     var self = this;
//
//     this.newGroup = [];
//     this.totalNewGroup = 0;
//     this.newGroupPerPage = 5;
//     getResultsPage(1);
//
//     this.pagination = {
//         current: 1
//     };
//
//     this.pageChanged = function(newPage) {
//         getResultsPage(newPage);
//     };
//
//     function getResultsPage(pageNumber) {
//         $http.get(FIREBASE_URL + '/newGroup'+ pageNumber)
//             .then(function(result) {
//                 self.newGroup = result.data.Items;
//                 self.totalNewGroup = result.data.Count
//             });
//     }
//
//
//
//   });
//   // end of controller
//
//
//
//
//
// })();
