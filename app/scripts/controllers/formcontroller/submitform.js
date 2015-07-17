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
   this.submit = function($firebaseArray) {
     this.newGroup.$add({
       date: this.date,
       groupName: this.groupName,
     });


   };

});


})();
