/* global angular */
(function() {
  'use strict';
  angular.module('lotrt')
    .controller('SubmitController', function(FIREBASE_URL, $http, $firebaseArray) {
      console.log('inside the controller')
      var self = this;

      this.saveGroups = function() {
        console.log('anything');
      };
      console.log('yes', self.groups);
    }); //end .controller




})();
