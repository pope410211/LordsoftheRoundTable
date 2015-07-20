/* global angular Firbase */
(function() {
  'use strict';
  angular.module('lotrt')
    .controller('SubmitController', function(FIREBASE_URL, $http, $state) {
      console.log('inside the controller');

var firbaseSub = new Firebase(FIREBASE_URL);

    var self = this;
    this.game = {};
    this.games = [];

    self.saveGroups = function($form) {
       if (!$form.$dirty || !$form.$valid) return;
      self.games.push(self.game);
      console.log(self.games);
      self.game = {};
        // $state.go('findGame')
    };
    var isNewGroup= true;

    firbaseSub.onSubmit(function(saveGroups) {
      if (self.games && isNewGroup) {

        firebaseSub.child('groups').child('/newGroup').set({
          name: self.game.groupName


        });
      }
      console.log('set the DATA FINALLY');
    }); //end


    }); //end .controller




})();
