/* global angular Firebase */
(function(){
  'use strict';

  angular.module('lotrt')

  .controller('submitForm', function($stateParams, $firebase, $firebaseArray) {

var firebaseSub = new Firebase('https://lotrttest.firebaseio.com');

var self = this;

var selfRef = firebaseSub.child('newGroup');

self.submit = $firebaseArray(firebaseSub);

this.submit = function(){
  self.submit.$add({

      date: self.date,
      groupName: self.groupName,
      location: self.local

  })//self.submit



};//end of submit function;
console.log(self);
});


})();
