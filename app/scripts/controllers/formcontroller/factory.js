/* global angular */
(function(){
  'use strict';

  angular.module('lotrt')
  .factory('games', function() {
 var groups = [];

 return {
   // CREATE
   add: function(group) {
     game.createdOn = new Date;

     // Record the submission...
     games.push(game);

     // TODO: Maybe POST this to Firebase one day?
   },
   // READ
   all: function() {
     return games.slice();
   // TODO: Maybe fetch from Firebase one day?
   }
   // UPDATE?
   // DELETE?
 };
}); // END module





})();
