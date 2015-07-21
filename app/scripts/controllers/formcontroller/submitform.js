/* global angular */
(function() {
  'use strict';
  angular.module('lotrt')
    .controller('SubmitController', function(FIREBASE_URL, $http, restangular) {
      console.log('inside the controller');

// var firebaseSub = new Firebase(FIREBASE_URL);

    var self = this;
    this.game = {};
    this.games = [];

    self.saveGroups = function() {

      $http.post(FIREBASE_URL + '/newGroup').
        success(function(data) {
          self.games({
             groupName: self.groupName
    // console.log(self.games);
           });
           self.groupName = '';
           // this callback will be called asynchronously
           // when the response is available
           console.log('yay', data);
         }).
         error(function(data, status, headers, config) {
           console.log('boo', data, status, headers, config);
           // called asynchronously if an error occurs
           // or server returns response with an error status.
         });



     };


    }); //end .controller




})();
