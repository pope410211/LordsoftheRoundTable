/* global angular Firbase */
(function() {
  'use strict';
  angular.module('lotrt')
    .controller('SubmitController', function(FIREBASE_URL, $http, games) {
      console.log('inside the controller');

    var self = this;

      this.game = {};

      this.saveGroups = function() {
        console.log('anything');
        this.games.push(FIREBASE_URL);
        console.log('work');
        this.game = {};
      };

    }); //end .controller




})();
