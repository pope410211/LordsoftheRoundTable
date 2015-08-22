/* global angular */


(function(){
'use strict';

angular.module('lotrt')
.controller('ListController', function(FIREBASE_URL, $http){

var self = this;
// var firebaseGroup = new firebaseGroup(FIREBASE_URL + '/newGroup');

// var newID = newRef.name();



$http.get(FIREBASE_URL + '/newGroup.json').
    success(function(data) {
      self.newGroup = data;
      console.log('success groups', data);
    }).
    error(function(data) {
      // log error
      console.log('Failed groups', data);
    });



    // this.newGroup = [];
    // this.totalNewGroup = 0;
    // this.newGroupPerPage = 10;
    // getResultsPage(1);
    //
    // this.pagination = {
    //     current: 1
    // };
    //
    // this.pageChanged = function(newPage) {
    //     getResultsPage(newPage);
    // };
    //
    // function getResultsPage(pageNumber) {
    //     // this is just an example, in reality this stuff should be in a service
    //     $http.get(FIREBASE_URL + '/newGroup'+ pageNumber)
    //         .then(function(result) {
    //             self.newGroup = result.data.Items;
    //             self.totalNewGroup = result.data.Count
    //         });
    // }


}); //END controller






})(); //end IFFE
