/* global angular Firbase */
(function() {
  'use strict';
  angular.module('lotrt')
    .controller('SubmitController', function(FIREBASE_URL, $http, games) {
      console.log('inside the controller');

    var self = this;
    this.game = {};
    this.games = [];

    self.saveGroups = function() {
      self.games.push(self.game);
      console.log(self.games);
      self.game = {};
    };

    }); //end .controller




})();
