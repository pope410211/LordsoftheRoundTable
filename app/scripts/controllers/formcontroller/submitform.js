/* global angular Firebase */
(function(){
  'use strict';

  angular.module('lotrt')

  .controller('SubmitController', function($stateParams, $firebase, $firebaseArray) {

var firebaseSub = new Firebase('https://lotrttest.firebaseio.com');
   var authData = firebaseSub.getAuth();
   var groupRef = firebaseSub.child(authData.uid);
   var newGroup = {
     'date': '',
     'groupName': ''
   };

   this.newGroup = $firebaseArray();
   console.log(newGroup);
   this.submitNail = function($firebaseArray) {
     this.newGroup.$add({
       brand: this.brand,
       name: this.name,
       family: this.family,
       tone: this.tone,
       finish: this.finish,
       rating: this.rating
     });


   };

});


})();
