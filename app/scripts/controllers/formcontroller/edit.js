(function(){
  'use strict';

  angular.module('lotrt')
  .controller('EditController', function(FIREBASE_URL, Restangular, $stateParams, $state){

var self = this;
var group = Restangular.one('newGroup', $stateParams.gameID);

this.game = {};


group.get().then(function(games){
self.game = games.plain();
// console.log(self.game);
});

var self = this;
var edit = Restangular.one('newGroup');
var timestamp = new Date().getTime();


this.editGame = {
};

this.editGame = function(){
  console.log(self.editGame);
  // self.edit.timestamp = timestamp
  group.patch(self.editGame);
console.log('yay');
  self.editGame = {};
  // $state.go('findGame');
};









  });
// end controller

})();

//end
