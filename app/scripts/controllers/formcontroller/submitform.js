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

    // self.saveGroups = function(games) {
    //   self.games.push(self.game);
    //   console.log('yay', self.games);
    // self.game = {};





        // TODO: Create an Ad(Group) from data in the form...
        // TODO: Put that Ad(Group) in the list of all Ads(Groups)...



    //  };
      // end self.saveGroups

     var isNewGame = true;
// this.saveGroups = function(games){
//     if(games && isNewGame){
//       firebaseSub.child('game').set({
//         groupName: self.game,
//
//       });
//         self.game = {};
//       console.log('it works!', games);
//     }
//
//
//     };
// onClick function





self.saveGroups = function(Restangular){
  self.games.push(self.game);

  console.log('ARRAY', self.games);
  // this.save = function(){
  //   Restangular.all(self.games).set({
  //     groupName: groupName.game
  //   })
  //
  // };
  this.save = function(games){
    if (games && isNewGame){
      firebaseSub.child('game').set({
              groupName: self.game,

            });
    };
  };
  self.game = {};
console.log('DATA', );
};

    }); //end .controller




})();
