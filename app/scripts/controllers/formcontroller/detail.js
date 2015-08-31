/* global angular*/

(function(){
  'use strict';

  angular.module('lotrt')
  .controller('DetailController', function(FIREBASE_URL, Restangular, $stateParams, $state){

var self = this;
var group = Restangular.one('newGroup', $stateParams.gameID);

this.game = {};


group.get().then(function(games){
self.game = games.plain();
console.log(self.game);
});



this.deleteGame = function(){
    Restangular.one('newGroup', $stateParams.gameID)
    .remove().then(function(){
          console.log('delete all the things');
$state.go('findGame');
      });
};

// this.deleteGame = function(id){
//   var deleteC = new Firebase(FIREBASE_URL + '/newGroup/' + $stateParams.gameID);
//   deleteC.remove();
// }







  });
// end controller

})();

//end
