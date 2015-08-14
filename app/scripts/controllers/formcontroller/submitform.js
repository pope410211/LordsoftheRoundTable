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

    self.saveGroups = function(games) {
      self.games.push(self.game);
      console.log('yay', self.games);

      self.game = {};
        // TODO: Create an Ad(Group) from data in the form...
        // TODO: Put that Ad(Group) in the list of all Ads(Groups)...


     }; // end self.saveGroups

     var isNewGame = true;

// firebaseSub.onClick(function(games){
// if(games && isNewGame){
//   firebaseSub.child('game').child(uid).set({
//     groupName: groupName.games,
//     date: date.games,
//     local: local.games,
//     description: description.games
//   });
// }
// // console.log('it works!' games);
// });
// onClick function

// function createCTRL(Restangular){
//   this.save = function(){
//     Restangular.all('games').post(this.games, this.game)
//
//   };
// console.log('it is working', createCTRL);
// };




    }); //end .controller




})();
