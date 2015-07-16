/* global angular Firebase */
(function(){
  'use strict';

  angular.module('lotrt')

  .controller('SubmitForm', function($stateParams, $firebase, $firebaseArray) {

var firebaseSub = new Firebase('https://lotrttest.firebaseio.com');

var self = this;

var selfRef = firebaseSub.child('newGroup');

// self.lotrt = $firebaseArray(firebaseSub);

self.submit = function(){
  self.selfRef.$add({

      date: self.date,
      groupName: self.groupName,
      location: self.local

  })//self.lotrt



};//end of submit function;
console.log('it worked', self.submit);
});


})();
