/* global angular Firebase */
(function(){
  'use strict';

  angular.module('lotrt')

  .controller('SubmitController', function($stateParams, $firebase, $firebaseArray) {

var firebaseSub = new Firebase('https://lotrttest.firebaseio.com');
   var authData = ref.getAuth();
   var nailsRef = ref.child(authData.uid);
   var newGroup = {
     'date': '',
     'groupName': ''
   };

   

   };

});


})();
