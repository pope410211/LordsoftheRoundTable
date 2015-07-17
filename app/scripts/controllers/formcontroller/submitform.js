/* global angular Firebase */
(function(){
  'use strict';

  angular.module('lotrt')

  .controller('SubmitController', function($firebase, $firebaseArray) {

var firebaseSub = new Firebase('https://lotrttest.firebaseio.com');
   var authData = firebaseSub.getAuth();
   var groupRef = firebaseSub.child(authData.uid);
   var newGroup = {
     'date': '',
     'groupName': ''
   };
 console.log(newGroup);


   this.newGroup = $firebaseArray(groupRef);
   this.submitGroup = function($firebaseArray) {
     this.newGroup.$add({
       date: this.date,
       groupName: this.groupName,
     });


   };

});


})();
