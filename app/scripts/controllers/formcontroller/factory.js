(function(){
  'use strict'

  angular.module('lotrt')
  .factory('groups', function() {
 var groups = [];

 return {
   // CREATE
   add: function(group) {
     group.created_on = new Date;

     // Record the submission...
     groups.push(group);

     // TODO: Maybe POST this to Firebase one day?
   },
   // READ
   all: function() {
     return groups.slice();
     // TODO: Maybe fetch from Firebase one day?
   },
   // UPDATE?
   // DELETE?
 };
}); // END module





})();
