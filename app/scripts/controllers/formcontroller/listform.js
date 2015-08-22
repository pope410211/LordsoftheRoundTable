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

  

}); //END controller






})(); //end IFFE
