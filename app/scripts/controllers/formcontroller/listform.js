/* global angular */


(function(){
'use strict';

angular.module('lotrt')
.controller('ListController', function(FIREBASE_URL, $http){

var self = this;
// var newID = newRef.name();



  $http.get(FIREBASE_URL + '/newGroup' + '{{key}}' + '.json').
      success(function(data, status, headers, config) {
        self.group = data;
        console.log('success groups', data);
      }).
      error(function(data, status, headers, config) {
        // log error
        console.log('Failed groups', data, status, headers, config);
      });





}); //END controller





})(); //end IFFE
