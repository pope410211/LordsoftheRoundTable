/* global angular */
(function() {
  'use strict';
  angular.module('lotrt')
    .controller('SubmitController', function(FIREBASE_URL, $http, Restangular) {
      console.log('inside the controller');

// var firebaseSub = new Firebase(FIREBASE_URL);

    var self = this;
    this.game = {};
    this.games = [];

    self.saveGroups = function() {
      self.games.push(self.game);
      console.log(self.games);
      self.game = {};
      self.games = [];


        // TODO: Create an Ad(Group) from data in the form...
        // TODO: Put that Ad(Group) in the list of all Ads(Groups)...
     }; // end self.saveGroups


    }); //end .controller




})();
