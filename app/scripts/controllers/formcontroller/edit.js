(function(){
  'use strict';

  angular.module('lotrt')
  .controller('EditController', function(FIREBASE_URL, Restangular, $stateParams, $state){

var self = this;
var group = Restangular.one('newGroup', $stateParams.gameID);

this.game = {};


group.get().then(function(games){
self.game = games.plain();
console.log(self.game);
});











  });
// end controller

})();

//end
