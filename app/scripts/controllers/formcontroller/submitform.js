/* global angular */
(function() {
  'use strict';
  angular.module('lotrt')
    .controller('SubmitController', function(FIREBASE_URL, $http, Restangular) {
      console.log('inside the controller');

var firebaseSub = new Firebase(FIREBASE_URL);

    var self = this;
    this.game = {
      groupName: '',
      date: '',
      local: '',
      description: ''
    };
    this.games = [];

        // TODO: Create an Ad(Group) from data in the form...
        // TODO: Put that Ad(Group) in the list of all Ads(Groups)...

     var isNewGame = true;

self.saveGroups = function(Restangular){
  self.games.push(self.game);

  console.log('ARRAY', self.games);
  this.save = function(){
    Restangular.one(games).post({
      groupName: groupName.game
    });

  };

  self.game = {};
console.log('DATA', Restangular);
};

    }); //end .controller




})();
// this.save = function(){
//   if (games && isNewGame){
//     firebaseSub.child('game').set({
//             groupName: self.game,
//
//           });
//   };
// };
