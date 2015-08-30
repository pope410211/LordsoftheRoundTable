(function(){
  'use strict';

  angular.module('lotrt')
  .controller('DetailController', function(FIREBASE_URL, Restangular, $stateParams){

var self = this;
var group = Restangular.one('newGroup', $stateParams.gameID);

this.game = {};


group.get().then(function(games){
self.game = games.plain();
console.log(self.game);
});


this.comment = {}

this.submitComments = function(){
  group.put(self.comment, $stateParams.gameID);
        self.comment = {};
};






  });
// end controller

})();

//end
