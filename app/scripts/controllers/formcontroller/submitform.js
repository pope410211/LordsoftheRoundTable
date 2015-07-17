/* global angular Firebase */
(function(){
  'use strict';

  angular.module('lotrt')

  .controller('SubmitController', function( $firebase, $firebaseArray) {

var self = this;
var firebaseSub = new Firebase('https://lotrttest.firebaseio.com');
   var authData = firebaseSub.getAuth();
   var groupRef = firebaseSub.child(authData.uid + '/newgroup');
   var newGroup = {
     'date': '',
     'groupName': ''
   };
 console.log(newGroup);


   self.newGroup = $firebaseArray(groupRef);
   self.addGroup = function($firebaseArray) {
     self.$add({
       date: self.date,
       groupName: self.groupName,
     });


   };

});


})();
