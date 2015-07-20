/* global angular Firbase */
(function() {
  'use strict';
  angular.module('lotrt')
    .controller('SubmitController', function(FIREBASE_URL, $http, $firebaseArray, games) {
      console.log('inside the controller');

    var self = this;

      this.game = {};

      this.saveGroups = function() {
        console.log('anything');
        groupForm.games.push(this.game);
        console.log('work');
        this.game = {};
      };

    }); //end .controller




})();
