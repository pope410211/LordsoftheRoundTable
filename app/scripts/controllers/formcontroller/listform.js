(function(){
'use strict';

angular.module('lotrt')
.controller('ListController', function(FIREBASE_URL, $http){

var self = this;

  $http.get(FIREBASE_URL + '/group.json').
      success(function(data, status, headers, config) {
        self.group = data;
        console.log('success groups', data, status, headers, config );
      }).
      error(function(data, status, headers, config) {
        // log error
        console.log('Failed groups', data, status, headers, config);
      });





}); //END controller





})(); //end IFFE
